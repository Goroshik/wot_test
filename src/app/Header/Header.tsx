'use client';

import { useContext } from 'react';

import { SwitchButtons } from '@/app/components';
import { ModeContext, SearchContext } from '@/react.contexts';

import { itemCountType } from '@/types';

import Search from './Search/Search';

import styles from './header.module.scss'

interface Props {
  onSearchClick: () => void;
  itemCount: itemCountType;
  onChangeItemCount: (itemCount: itemCountType) => void;
}

export default function Header(props: Props) {
  const { onSearchClick, itemCount, onChangeItemCount } = props;

  const { tableMode, setMode } = useContext(ModeContext);
  const { inputValue, setInputValue } = useContext(SearchContext)

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <div className={styles.container}>
      <Search
        value={inputValue}
        onChangeValue={onChangeSearchValue}
        onSearchClick={onSearchClick}
      />
      <SwitchButtons buttonActive={itemCount} buttonVariants={['25', '50', '75','100']} onClickButton={onChangeItemCount} />
      <SwitchButtons buttonActive={tableMode} buttonVariants={['row', 'grid']} onClickButton={setMode} />
    </div>
  )
}
