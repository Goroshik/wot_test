import React, { useContext, useEffect, useState } from 'react';
import { ImageLoaderProps } from 'next/image';

import { ModeContext } from '@/react.contexts';
import { parseDataToColumns } from './rowConfig';

import TableColumns from './TableColumn/TableColumn';
import TableGrid from './TableGrid/TableGrid';
import { TankDataMapping } from '@/types';

interface Props {
  data: TankDataMapping[];
}

export default function Table(props: Props) {
  let columnData = parseDataToColumns(props.data);
  const { tableMode } = useContext(ModeContext);

  const imgLoader = ({ src }: ImageLoaderProps) => src;

  useEffect(() => () => { columnData = [] })

  return tableMode === 'row' ?
    <TableColumns data={columnData} imgLoader={imgLoader} /> :
    <TableGrid data={props.data} imgLoader={imgLoader} />
}
