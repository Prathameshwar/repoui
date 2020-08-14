/*
 * @Author: NhuHH 
 * @Date: 2018-12-20 16:55:48 
 * @Last Modified by: NhuHH
 * @Last Modified time: 2018-12-25 10:44:39
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import styles from 'styles/jss/containers/vehicleForm';
import { UrlPath } from 'commons/constants';
import messages from './messages';
import { getVehicleIdAndChangeStatusDialog, getVehicles } from '../../actions';

class VehicleDialog extends React.PureComponent {
  copyVehicleId = () => {
    const copyText = document.getElementById('vehicleId');
    copyText.select();
    document.execCommand('copy');
  };
  onClickButton() {
    this.props.getVehicleIdAndChangeStatusDialog('', false);
    this.props.history.replace({
      pathname: `${UrlPath}/vehicle-list`,
    });
    this.props.getVehicles();
  }
  render() {
    const { check, vehicleID, classes } = this.props;
    return (
      <Dialog
        open={check}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <FormattedMessage {...messages.messageDialog} />
        </DialogTitle>
        <DialogContent>
          <input
            type="text"
            value={vehicleID}
            id="vehicleId"
            className={classes.dialogContent}
          />
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.buttonCopyDialog}
            onClick={() => this.copyVehicleId()}
          >
            <FormattedMessage {...messages.copy} />
          </Button>
          <Button onClick={() => this.onClickButton()}>
            <FormattedMessage {...messages.cancelButton} />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

VehicleDialog.propTypes = {
  check: PropTypes.bool,
  vehicleID: PropTypes.string,
  getVehicleIdAndChangeStatusDialog: PropTypes.func,
  getVehicles: PropTypes.func,
  classes: PropTypes.object,
  history: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    getVehicleIdAndChangeStatusDialog: (vehicleID, status) =>
      dispatch(getVehicleIdAndChangeStatusDialog(vehicleID, status)),
    getVehicles: () => dispatch(getVehicles()),
  };
}

const withConnect = connect(
  false,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  withRouter,
  withStyles(styles),
)(VehicleDialog);
