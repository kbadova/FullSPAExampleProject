import React from 'react';
import SideMenu from 'components/SideMenu';
import TenantInfo from 'components/TenantInfo';

import {connect} from 'react-redux';
import {fetchBookings} from 'modules/bookings';
import './styles.scss';

class BookingList extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchBookings();
  }

  render() {
    const {bookings} = this.props;

    return (
      <div className="container">
        <SideMenu />
        <div className="body">
          {bookings.map(booking => {
            return <TenantInfo tenant={booking.tenant} key={booking.id} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.bookings;

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingList);
