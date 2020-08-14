/*
 * @Author: NhuHH 
 * @Date: 2018-11-15 11:30:54 
 * @Last Modified by: NhuHH
 * @Last Modified time: 2018-12-27 10:44:55
 */
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import UserForm from './UserForm';
import {
  getUserInformationById,
  getUserUpdate,
  postCreateUser,
  getRoles,
} from './../actions';
import { makeSelectUser } from '../selectors';
import { makeAdditionalInformation } from './AdditionalInformation/selectors';
import { makeAttachmentInformation } from './AttachFile/selectors';
import { makeRoleInformation } from './RoleInformation/selectors';

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  additional: makeAdditionalInformation(),
  role: makeRoleInformation(),
  attachment: makeAttachmentInformation(),
});
function mapDispatchToProps(dispatch) {
  return {
    getUserInformationById: id => dispatch(getUserInformationById(id)),
    getUserUpdate: (userId, data) => dispatch(getUserUpdate(userId, data)),
    postCreateUser: data => dispatch(postCreateUser(data)),
    getRoles: () => dispatch(getRoles()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
)(UserForm);
