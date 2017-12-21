import React from 'react';
import {clearNotification} from 'modules/bookings';

const TenantInfo = props => {
  const {tenant} = props;

  const openTenantModal = () => clearNotification();

  return (
    <div>
      {/*open modal here*/}
      <div onClick={() => this.openTenantModal}>{tenant.name}</div>
    </div>
  );
};

export default TenantInfo;
