import { ImageLoaderProps } from 'next/image';

import { HeaderCell, ImagCell, TextCell } from '../TableCell/TableCell';
import { columnType } from '../rowConfig';

import styles from './tableColumn.module.scss';

interface Props {
  data: columnType[];
  imgLoader: ({ src }: ImageLoaderProps) => ImageLoaderProps['src'];
}

function TableColumns(props: Props) {
  console.log(props.data[0].value.length)
  return (
    <div className={styles.container}>
      {
        props.data.map((col) => (
          <div key={col.headerName} style={{ flex: col.flex }}>
            <HeaderCell text={col.headerName} />
            {
              col.value.map((value, index) => (
                <div key={`${col.headerName}_${index}`} className={styles.cell_container}>
                  {
                    col?.imgData?.src ?
                      <ImagCell
                        loader={props.imgLoader}
                        src={col.imgData.src}
                        alt={col.imgData?.alt || ''}
                        renderContent={<TextCell text={value} />}
                      /> :
                      <TextCell
                        text={value}
                      />
                  }
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default TableColumns;