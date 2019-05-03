import React from "react";
import timeSince from "../../functions/timeSince";

const DateTime = props => {
  const dateTime = timeSince(props.timestamp);
  return <>{dateTime}</>;
};

export default DateTime;
