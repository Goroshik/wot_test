import React from 'react';
import Image, { ImageLoaderProps } from 'next/image';

import { TankDataMapping } from '@/types';

import styles from './tableGrid.module.scss';
import { TextCell } from '../TableCell/TableCell';

interface Props {
  data: TankDataMapping[];
  imgLoader: ({ src }: ImageLoaderProps) => string;
}

export default function TableGrid(props: Props) {
  const { data, imgLoader } = props;

  return (
    <ul className={styles.container}>
      {
        data.map(v => (
          <li className={styles.item_container} key={v.key}>
            <div className={styles.img_container}>
              <Image
                loader={imgLoader}
                src={v.imgBig}
                width={200}
                height={150}
                alt={`${v.short_name}`} />
            </div>
            <TextCell text={`${v.tier} ${v.name}`} />
          </li>
        ))
      }
    </ul>
  )
}
