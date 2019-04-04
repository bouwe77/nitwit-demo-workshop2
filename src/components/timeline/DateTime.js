import React from "react";

import timeSince from "../../functions/timeSince";

const DateTime = props => (
  <React.Fragment>{timeSince(props.timestamp)} ago</React.Fragment>
);

export default DateTime;
