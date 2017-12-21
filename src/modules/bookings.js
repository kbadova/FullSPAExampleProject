const initialBookings = {
  bookings: []
};

const FETCH_BOOKINGS = 'fetchBookings';

export const fetchBookings = {type: FETCH_BOOKINGS};

const bookingsReducer = (state = initialBookings, action) => {
  switch (action.type) {
    case FETCH_BOOKINGS:
      const exampleBookings = [
        {
          id: 1,
          name: 'Booking for krasi',
          tenant: {
            name: 'krasi',
            age: 21
          }
        },
        {
          id: 2,
          name: 'Booking for marto',
          tenant: {
            name: 'marto',
            age: 21
          }
        },
        {
          id: 3,
          name: 'Booking for ivo',
          tenant: {
            name: 'ivo',
            age: 22
          }
        }
      ];
      return Object.assign({}, state, {bookings: exampleBookings});

    default:
      return state;
  }
};

export default bookingsReducer;
