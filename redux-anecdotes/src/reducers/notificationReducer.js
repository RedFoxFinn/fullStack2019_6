
const initialState = {
  notification: '',
  state: false
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return {...state, notification: action.notification, state: true};
  case 'RESET_NOTIFICATION':
    return {...state, notification: '', state: false};
  default:
    return state;
  }
};

export const setNotification = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    notification: notification
  };
};

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION'
  };
};

export const notify = (notification, time) => {
  return async dispatch => {
    dispatch({type: 'SET_NOTIFICATION', notification: notification});
    setTimeout(() => {
      dispatch({type: 'RESET_NOTIFICATION'});
    }, time * 1000);
  };
};

export default notificationReducer;