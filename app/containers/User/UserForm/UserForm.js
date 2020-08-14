/*
 * @Author: NhuHH 
 * @Date: 2018-11-13 08:50:03 
 * @Last Modified by: DanND1
 * @Last Modified time: 2018-12-20 16:13:41
 */
import React from 'react';
import PropTypes from 'prop-types';
import bcrypt from 'bcryptjs';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import _isEmpty from 'lodash/isEmpty';
import { withStyles, Card } from '@material-ui/core';
import styles from 'styles/jss/containers/userForm';
import AppDecorator from 'containers/AppDecorator';
import CardHeaderComponent from 'components/CardHeader';
import Footer from 'components/Footer/index';
import { DataToTimestamp } from 'utils/timeStampUtil';
import { parseQuery } from 'utils/actionUtils';
import messages from './messages';
import RegisterForm from './RegisterForm/Loadable';
export class UserForm extends React.PureComponent {
  componentDidMount() {
    this.props.getRoles();
  }
  formatDataSubmit = values => {
    // eslint-disable-next-line react/prop-types
    const { role, additional } = this.props;
    const roles = [];
    const additionals = [];
    if (!_isEmpty(role.dataUserRole)) {
      role.dataUserRole.map(item =>
        roles.push({
          id: item.value,
        }),
      );
    }
    if (!_isEmpty(additional.dataAddInformation)) {
      additional.dataAddInformation.map(item =>
        additionals.push({
          key: item.key,
          value: item.value,
        }),
      );
    }
    const dataFormat = {
      name: values.name,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneAreaCode: values.area_code.label,
      phoneNumber: values.phoneNumber,
      gender: values.gender.value,
      address: values.address,
      nationality: values.nationality.value,
      birthday: DataToTimestamp(values.birthday) * 1000000000,
      additionalInfo: additionals,
      roles,
    };
    if (values.password) {
      const salt = bcrypt.genSaltSync(10);
      dataFormat.password = bcrypt.hashSync(values.password, salt);
    }
    return dataFormat;
  };
  handleOnSubmit = values => {
    const { location } = this.props;
    const { id } = parseQuery(location.search);
    const data = this.formatDataSubmit(values);
    if (id !== 'register') {
      this.props.getUserUpdate(id, data);
    } else {
      this.props.postCreateUser(data);
    }
  };
  render() {
    const { classes, user } = this.props;
    const { dataAddInformation, dataUserRole } = user;
    const { location } = this.props;
    const { id } = parseQuery(location.search);
    return (
      <AppDecorator>
        <div className={classes.root}>
          <Card className={classes.container}>
            <div className={classes.titleForm}>
              {id !== 'register' ? (
                <CardHeaderComponent
                  type=""
                  title={<FormattedMessage {...messages.titleUpdate} />}
                />
              ) : (
                <CardHeaderComponent
                  type=""
                  title={<FormattedMessage {...messages.title} />}
                />
              )}
            </div>
            <RegisterForm
              onSubmit={this.handleOnSubmit}
              dataAddInformation={dataAddInformation}
              dataUserRole={dataUserRole}
            />
          </Card>
          <Footer />
        </div>
      </AppDecorator>
    );
  }
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  getUserInformationById: PropTypes.func.isRequired,
  getUserUpdate: PropTypes.func.isRequired,
  postCreateUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  getRoles: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  withStyles(styles),
)(UserForm);
