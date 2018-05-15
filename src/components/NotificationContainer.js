import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addNotification } from "../actions/actions-da-muks";

export default class NotificationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello</div>;
  }
}


export default connect (mapStateToProps, null )(NotificationContainer);
