import React from "react";
import { withRouter } from "react-router-dom";

import "./list-item.styles.scss";

const ListItem = (props) => (
  <div
    className={`list-item ${props.size}`}
    onClick={() => {
      props.history.push(`${props.match.url}${props.linkUrl}`);
    }}
  >
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(ListItem);
