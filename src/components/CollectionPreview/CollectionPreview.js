import React from "react";

import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

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
            return (
              <CollectionItem
                key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            );
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
