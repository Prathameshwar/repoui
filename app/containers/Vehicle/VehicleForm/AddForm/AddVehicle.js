/*
 * @Author: LoiDT2 
 * @Date: 2018-11-13 09:12:35 
 * @Last Modified by: NhuHH
 * @Last Modified time: 2018-12-25 10:42:45
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styles from 'styles/jss/containers/vehicleForm';
import { UrlPath } from 'commons/constants';
import FormInfo from '../Form/Loadable';
import VehicleDialog from '../VehicleDialog/Loadable';

export class AddForm extends React.PureComponent {
  onClickButton() {
    this.props.history.replace({
      pathname: `${UrlPath}/vehicle-list`,
    });
  }
  handleOnSubmit = value => {
    const valueSubmit = {
      OBDConfig: value.OBDConfig.value,
      fuelStatus: value.fuelStatus,
      odoStatus: value.odoStatus,
      color: value.color,
      modelId: value.model.value,
      name: value.name,
      vin: value.vin,
    };
    this.props.onAddVehicle(valueSubmit);
  };

  render() {
    const { classes, VehicleManagement } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.wrapperVehicle}>
          <FormInfo onSubmit={this.handleOnSubmit} />
        </Card>
        <VehicleDialog
          check={VehicleManagement.dialog.status}
          vehicleID={VehicleManagement.dialog.vehicleId}
        />
      </React.Fragment>
    );
  }
}

AddForm.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  onAddVehicle: PropTypes.func,
  VehicleManagement: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(AddForm);
