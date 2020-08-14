/*
 * @Author: NhuHH 
 * @Date: 2018-11-13 08:50:20 
 * @Last Modified by: DanND1
 * @Last Modified time: 2018-12-27 08:49:16
 */
import { fromJS } from 'immutable';
import { actionTypes } from './constants';

export const initialState = fromJS({
  filesInit: [],
  files: [],
  dataImage: [],
});

function AttachmentReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_IMG:
      return state.update('dataImage', dataImage =>
        dataImage.concat(action.dataImage),
      );
    case actionTypes.GET_IMAGE.SUCCESS: {
      const files = state.get('files').toJS();
      const dataImage = state.get('dataImage').toJS();
      dataImage.push(action.payload.dataImage);
      files.push(action.payload.files);
      return state.merge({
        filesInit: fromJS(files) || [],
        files: fromJS(files) || [],
        dataImage: fromJS(dataImage) || [],
      });
    }
    case actionTypes.UPLOAD_FILES_IMAGE:
      return state.update('files', files => files.concat(action.file));
    case actionTypes.UPDATE_ATTACHMENT_FILE_LIST:
    case actionTypes.RESET_DATA:
      return state.merge({
        files: action.payload.files || [],
        dataImage: action.payload.dataImage || [],
      });
    default:
      return state;
  }
}
export default AttachmentReducer;
