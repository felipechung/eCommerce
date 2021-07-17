import React from "react";
import "./CollectionPreview.scss";

function CollectionPreview(props) {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => {
            return index < 4;
          })

          .map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
