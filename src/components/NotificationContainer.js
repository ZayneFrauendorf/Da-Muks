import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addNotification } from "../actions/actions-da-muks";

class NotificationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message, type } = this.props;
    
    return (
      <div>
        {type && (
          <div className={`notification-${type}`}>
            <p>{message}</p>
            <p>{type}</p>
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
