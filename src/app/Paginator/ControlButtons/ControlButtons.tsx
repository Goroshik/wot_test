import { ReactNode } from "react";

import { LinkButton } from "@/app/components";

import styles from './controlButtons.module.scss';

interface Props {
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickPage: (page: number) => void;
  currentPage: number;
  maxPage: number;
}

const countBtnValues = (currentPage: number, maxPage: number) => {
  const pages = [];

  if (currentPage > 2) {
    pages.push(currentPage - 2);
  }

  if (currentPage > 1) {
    pages.push(currentPage - 1);
  }

  pages.push(currentPage);

  if (currentPage < maxPage - 1) {
    pages.push(currentPage + 1);
  }

  if (currentPage < maxPage - 2) {
    pages.push(currentPage + 2);
  }

  return pages;
}

export default function ControlButtons(props: Props) {
  const { currentPage, maxPage } = props;
  const btnValues = countBtnValues(currentPage, maxPage);

  return (
    <div className={styles.container}>
      <LinkButton onClick={props.onClickPrev} text={'prev'} className={styles.btn_mode} />

      <div>
        <LinkButton onClick={() => props.onClickPage(1)} text={'start'} className={styles.btn_mode} />
        {
          btnValues.map(value => (
            <LinkButton
              key={value}
              className={`${styles.btn_mode} ${value === currentPage ? styles.btn_mode__chosen : ''}`}
              onClick={() => props.onClickPage(value)}
              text={value.toString()}
            />
          ))
        }
        <LinkButton onClick={() => props.onClickPage(maxPage)} text={'end'} className={styles.btn_mode} />
      </div>

      <LinkButton onClick={props.onClickNext} text={'next'} className={styles.btn_mode} />
    </div>
  )
}
