import React from "react";
import "./list-item.styles.scss";

const ListItem = (props) => (
  <div
    style={{ backgroundImage: `url(${props.image})` }}
    className={`list-item ${props.size}`}
  >
    <div className="content">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default ListItem;
