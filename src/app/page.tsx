'use client';

import { useCallback, useEffect, useState } from 'react';

import { ModeContext, SearchContext } from '@/react.contexts';
import { tableModeType, itemCountType, paginationType, TankDataMapping } from '@/types';

import Header from './Header/Header';
import Table from './Table/Table';

import styles from './page.module.scss'
import Paginator from './Paginator/Paginator';
import { mappingTankDataForTable } from '@/mapping';

export default function Home() {
  const [data, setData] = useState<TankDataMapping[]>();
  const [tableMode, setMode] = useState<tableModeType>('row');
  const [inputValue, setInputValue] = useState<string>('');
  const [itemCount, setItemCount] = useState<itemCountType>('25')
  const [paginationData, setPaginationData] = useState<paginationType>({ current: 1, count: 1 });

  const fetchData = useCallback(
    async (pageNumber: paginationType['count'], limit: itemCountType) => {
      console.log(limit, pageNumber)
      try {
        const res = await fetch(
          `https://api.tanki.su/wot/encyclopedia/vehicles/
          ?application_id=${process.env.NEXT_PUBLIC_ASSESS_TOKEN}
          &limit=${limit}
          &page_no=${pageNumber}
        `
        );
        const { meta, data } = await res.json();;

        const result = Object.keys(data).map(tankId => mappingTankDataForTable(data[tankId]));

        setPaginationData({ current: meta.page, count: meta.page_total });
        setData(result);
      } catch (error) {
        setData([]);
      }
    }, [])

  const onSearchClick = () => fetchData(paginationData.current, itemCount);
  const onChangePage = (pageNumber: paginationType['current']) => fetchData(pageNumber, itemCount);
  const onChangeItemCount = (count: itemCountType) => {
    setItemCount(count)
    fetchData(paginationData.current, count)
  };

  useEffect(() => {
    fetchData(paginationData.count, itemCount);
  }, [])

  return (
    <ModeContext.Provider value={{ tableMode, setMode }}>
      <SearchContext.Provider value={{ inputValue, setInputValue }}>
        <div className={styles.container}>
          <Header
            onSearchClick={onSearchClick}
            itemCount={itemCount}
            onChangeItemCount={onChangeItemCount}
          />
          <Paginator paginationData={paginationData} onChangePage={onChangePage}>
            {data?.length && <Table data={data} />}
          </Paginator>
        </div>
      </SearchContext.Provider>
    </ModeContext.Provider>
  )
}
