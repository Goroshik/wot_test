'use client';

import React from 'react';
import Image, { ImageLoaderProps } from 'next/image';

import styles from './tableCell.module.scss';

interface TextCellProps {
  text: string | number;
  cxContainer?: string;
  cxText?: string;
}

export const TextCell = ({ text, cxContainer, cxText }: TextCellProps) => {
  return (
    <div className={cxContainer ? cxContainer : styles.txt_container}>
      <span className={cxText ? cxText : styles.txt} >
        {text}
      </span>
    </div>
  )
}

interface ImagCellProps {
  loader: (p: ImageLoaderProps) => string;
  src: string;
  alt: string;
  renderContent: JSX.Element;
}

export const ImagCell = ({ loader, src, alt, renderContent }: ImagCellProps) => {
  return (
    <div className={styles.img_container}>
      <div>
        <Image
          loader={loader}
          src={src}
          width={60}
          height={25}
          alt={alt} />
      </div>
      {renderContent}
    </div>
  )
}

interface HeaderCellProps {
  text: string;
}

export const HeaderCell = ({ text }: HeaderCellProps) => {
  return <TextCell
    text={text}
    cxContainer={styles.header_container}
    cxText={styles.header_container__text}
  />
}