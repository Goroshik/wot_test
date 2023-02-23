import React, { ReactNode } from "react";
import { paginationType } from "@/types";

import ControlButtons from "./ControlButtons/ControlButtons";

interface Props {
  paginationData: paginationType;
  onChangePage: (pageNumber: paginationType['count']) => void;
  children: ReactNode;
}

export default function Paginator(props: Props) {
  const { paginationData, onChangePage, children } = props;

  const onClickNext = () => {
    if (paginationData?.current < paginationData.count) {
      onChangePage(paginationData.current + 1);
    }
  };
  const onClickPrev = () => {
    if (paginationData?.current > 1) {
      onChangePage(paginationData.current - 1);
    }
  };
  const onClickPage = (page: paginationType['count']) => {
    onChangePage(page)
  }

  const controlButtons = <ControlButtons
    onClickNext={onClickNext}
    onClickPrev={onClickPrev}
    onClickPage={onClickPage}
    currentPage={paginationData.current}
    maxPage={paginationData.count}
  />

  return (
    <div>
      {controlButtons}
      {children}
      {controlButtons}
    </div>
  )
}