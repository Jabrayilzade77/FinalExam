import React, { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";
import { Helmet } from "react-helmet";

function Basket() {
  const { basket, removeBasket, decBasket, addBasket } =
    useContext(BasketContext);

  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Basket Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
      {basket.map((x) => (
        <div>
          <img src={x.image} alt="" />
          <div>
            <p>{x.title}</p>
            <p>{x.desc}</p>
            <p>${x.price}</p>

            <div>{x.count}</div>
            <button onClick={() => decBasket(x)}>-</button>
            <button onClick={() => addBasket(x)}>+</button>
            <button onClick={() => removeBasket(x)}>x</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Basket;
