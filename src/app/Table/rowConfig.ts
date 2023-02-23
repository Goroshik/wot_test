import { TankDataMapping } from './../../types';

export type columnType = {
  headerName: string;
  valuePath: keyof TankDataMapping;
  flex: number;
  imgData?: {
    src?: string;
    alt?: string;
    bigImgSrc?: string;
  }
  value: Array<string | number>
}

const columns: columnType[] = [
  {
    headerName: 'Tank name',
    valuePath: 'name',
    flex: 3,
    imgData: {
      src: ''
    },
    value: []
  },
  {
    headerName: 'Country',
    valuePath: 'nation',
    flex: 1,
    value: []
  },
  {
    headerName: 'Tank type',
    valuePath: 'type',
    flex: 2,
    value: []
  },
  {
    headerName: 'Tier',
    valuePath: 'tier',
    flex: 1,
    value: []
  },
  {
    headerName: 'hp',
    valuePath: 'fullHP',
    flex: 1,
    value: []
  },
  {
    headerName: 'Hull',
    valuePath: 'hullHP',
    flex: 1,
    value: []
  },
  {
    headerName: 'Forward.S',
    valuePath: 'speedForward',
    flex: 1,
    value: []
  },
  {
    headerName: 'backward.S',
    valuePath: 'speedBackward',
    flex: 1,
    value: []
  },
]

export const parseDataToColumns = (dataArray: TankDataMapping[]) => {
  const result = columns.map((column) => {
    const col = column;

    col.value = [];

    dataArray.map((data) => {
      if (col.imgData) {
        col.imgData = {
          src: data.imgContour,
          alt: data.nameShort,
          bigImgSrc: data.imgBig,
        }
      }

      col.value.push(data[col.valuePath])
    })

    return col;
  })

  return result;
}
