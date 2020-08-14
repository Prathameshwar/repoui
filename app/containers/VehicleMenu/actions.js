/*
 * @Author: LoiDT2 
 * @Date: 2018-11-13 09:18:12 
 * @Last Modified by: NhuHH
 * @Last Modified time: 2018-12-25 16:44:21
 */
/*
 *
 * VehicleMenu actions
 *
 */
import { routerActions } from 'react-router-redux';
import { UrlPath } from 'commons/constants';
import { DEFAULT_ACTION, GET_DATA_MENUTREE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getDataMenu(data) {
  let dataMenu = [];
  if (data !== undefined) {
    dataMenu = data;
  }
  return {
    type: GET_DATA_MENUTREE,
    dataMenu,
  };
}
export const goToSoftwareUpdateDetail = () => async dispatch => {
  await dispatch(routerActions.push(`${UrlPath}/ecu-software-update-detail`));
};
