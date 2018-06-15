import React, { Component } from "react";
import { connect } from "react-redux";

class NotificationContainer extends Component {
  render() {
    const { message, type } = this.props;

    return (
      <div
        style={{
          position: "absolute",
          top: "100px",
          margin: "0 auto",
          zIndex: "1",
          display: "block",
          bottom: "-35px",
          width: "100%"
        }}
      >
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
