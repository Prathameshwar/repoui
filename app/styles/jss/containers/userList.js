/*
 * @Author: NhuHH 
 * @Date: 2018-11-13 08:59:27 
 * @Last Modified by: NhuHH
 * @Last Modified time: 2018-12-27 10:42:20
 */
import { colorID, breakpoint, textStyle } from '../common';
const userList = () => ({
  root: {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    padding: '30px',
    [breakpoint.large]: {
      padding: '26px',
    },
    [breakpoint.medium]: {
      padding: '20px',
    },
    [breakpoint.small]: {
      padding: '20px',
    },
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  header: {
    backgroundColor: colorID.gray1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '92px',
    [breakpoint.large]: {
      height: '81px',
    },
    [breakpoint.medium]: {
      height: '61px',
    },
    [breakpoint.small]: {
      height: '61px',
    },
    '& > *': {
      margin: '0 15px',
      '&:last-child': {
        marginLeft: 0,
      },
      [breakpoint.small]: {
        margin: '0 10px',
      },
      [breakpoint.medium]: {
        margin: '0 10px',
      },
      [breakpoint.large]: {
        margin: '0 13px',
      },
    },
  },
  text: {
    ...textStyle.text3,
    [breakpoint.large]: {
      fontSize: '18px',
    },
    [breakpoint.medium]: {
      fontSize: '14px',
    },
    [breakpoint.small]: {
      fontSize: '14px',
    },
  },
  checkboxRoot: {
    color: 'gray',
    '&$checked': {
      color: '#21a600',
    },
  },
  checked: {},
  ReactTable: {
    height: 'calc(100% - 140px)',
    [breakpoint.large]: {
      height: 'calc(100% - 123px)',
    },
    [breakpoint.medium]: {
      height: 'calc(100% - 94px)',
    },
    [breakpoint.small]: {
      height: 'calc(100% - 94px)',
    },
  },
  tooltipHover: {
    position: 'relative',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: '1',
    cursor: 'pointer',
    position: 'absolute',
  },
  iconLoading: {
    height: '100%',
  },
});

export default userList;
