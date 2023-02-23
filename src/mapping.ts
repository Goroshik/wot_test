import { TankData, TankDataMapping } from './types';

export const mappingTankDataForTable = (data: TankData): TankDataMapping => ({
  key: data.tank_id,
  name: data.name,
  nameShort: data.short_name,
  imgBig: data.images.big_icon,
  imgContour: data.images.contour_icon,
  nation: data.nation,
  type: data.type,
  tier: data.tier,
  fullHP: data.default_profile.hp,
  hullHP: data.default_profile.hull_hp,
  speedForward: data.default_profile.speed_forward,
  speedBackward: data.default_profile.speed_backward,
})