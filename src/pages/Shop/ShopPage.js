import { React, useState } from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map((data) => {
        return (
          <CollectionPreview
            key={data.id}
            title={data.title}
            routeName={data.routeName}
            items={data.items}
          />
        );
      })}
    </div>
  );
}

export default ShopPage;
