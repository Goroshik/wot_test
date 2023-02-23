export interface TankData {
  tank_id: number,
  tag: string,
  name: string,
  short_name: string,
  images: {
    small_icon: string,
    contour_icon: string,
    big_icon: string,
  },
  type: string,
  description: string,
  nation: string,
  tier: number,
  default_profile: {
    hp: number,
    speed_forward: number,
    hull_hp: number,
    speed_backward: number,
  }
};

export interface TankDataMapping {
  [key: string]: string | number;
  key: number;
  name: string;
  nameShort: string,
  imgBig: string;
  imgContour: string;
  nation: string;
  type: string;
  tier: number;
  fullHP: number;
  hullHP: number;
  speedForward: number;
  speedBackward: number;
}

export interface FetchingData {
  meta: {
    page_total: 78,
    page: 2
  };
  data: {
    [key: string]: TankData;
  }
}

export type tableModeType = 'row' | 'grid';
export type itemCountType = '25' | '50' | '75' | '100';
export type paginationType = { current: number, count: number };