/*
 * @Author: NhuHH 
 * @Date: 2018-11-15 11:30:29 
 * @Last Modified by: NhuHH
 * @Last Modified time: 2018-12-24 08:21:40
 */
import Chance from 'chance';
import { actionTypes } from './constants';

const chance = new Chance();
export function getImage(image) {
  return {
    type: actionTypes.GET_IMAGE.REQUEST,
    payload: {
      image,
    },
  };
}

export function updateAttachmentList(files, dataImage) {
  return {
    type: actionTypes.UPDATE_ATTACHMENT_FILE_LIST,
    payload: {
      files,
      dataImage,
    },
  };
}
export function ChangeImage(file, imageURL) {
  const id = chance.guid();
  const dataImage = [];
  const image = {
    id,
    name: file.name,
    url: imageURL,
  };
  dataImage.push(image);
  return {
    type: actionTypes.CHANGE_IMG,
    dataImage,
  };
}

export function UploadFilesImage(item) {
  const file = [];
  file.push(item);
  return {
    type: actionTypes.UPLOAD_FILES_IMAGE,
    file,
  };
}
export function resetDataAttachFile(files, dataImage) {
  return {
    type: actionTypes.RESET_DATA,
    payload: {
      files,
      dataImage,
    },
  };
}
