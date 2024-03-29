import React from "react";
import "./CollectionItem.scss";

function CollectionItem(props) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
