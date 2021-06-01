import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function Skincare() {
  const [postProduct, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "cosmetics"]{
        title,
        slug,
        defaultProductVariant{
          "imageUrl": images[0].asset->url,
          price
        },
        tags
      }`
      )
      .then((product) => setPost(product))
      .catch(console.error);
  }, []);
  return (
    <main className="skincare pageStructure">
      <h1 className="pageName">Skincare</h1>
      <div className="showProducts">
        {postProduct &&
          postProduct.map((product, index) => {
            if (product.tags[2] == "skincare") {
              return (
                <article>
                  {console.log(product.tags)}
                  <Link
                    to={"/product/" + product.slug.current}
                    key={product.slug.current}
                  >
                    <span key={index}>
                      <img src={product.defaultProductVariant.imageUrl} />
                      <h3>{product.title}</h3>
                    </span>
                  </Link>
                  <p>{product.defaultProductVariant.price + "kr"}</p>
                  <h4>*****</h4>
                  <button>Add to cart</button>
                </article>
              );
            }
            return;
          })}
      </div>
    </main>
  );
}
