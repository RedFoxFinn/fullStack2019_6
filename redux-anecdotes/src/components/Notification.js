import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    notificationState: state.notificationState
  };
};

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };
  return (
    props.notificationState.state ?
      <div style={style}>
        {props.notificationState.notification}
      </div> :
      null
  );
};

export default connect(mapStateToProps)(Notification);