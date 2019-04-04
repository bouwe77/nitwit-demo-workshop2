import React from "react";

import timeSince from "../../functions/timeSince";

const DateTime = props => {
  const dateTime = timeSince(props.timestamp);
  return <React.Fragment>{dateTime}</React.Fragment>;
};

export default DateTime;
