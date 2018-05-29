import React, { Component } from "react";
import { connect } from "react-redux";

class NotificationContainer extends Component {
  render() {
    const { message, type } = this.props;

    return (
      <div>
        {type && (
          <div className={`notification-${type}`}>
            <h3>{message}</h3>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.notification.message,
    type: state.notification.errorType
  };
};

export default connect(mapStateToProps)(NotificationContainer);
