import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../context/BasketProvider";
import { WishListContext } from "../context/WishListProvider";
import styles from "./Home.module.scss";
import {Helmet} from "react-helmet";

function Home() {
  const [products, setProducts] = useState([]);

  const { addBasket } = useContext(BasketContext);
  const { addwishList, isExitsWishList } = useContext(WishListContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp/");
    const data = await res.json();

    setProducts(data);
  }
  return (
    <>
     <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
      <main>
        <section>
          <div className={styles.finding_container}>
            <div className={styles.bos_div}></div>
            <div className={styles.finding_desc_div}>
              <h2 className={styles.finding_title}>
                Finding Your Perfect Shoes
              </h2>
              <p className={styles.finding_desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
              <button className={styles.finding_btn}>SHOP NOW</button>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.free_container}>
            <div className={styles.free_cards}>
              <div className={styles.free_icon}>
                <i class="fa-sharp fa-solid fa-car-side"></i>
              </div>
              <div className={styles.free_desc}>
                <p className={styles.free_title}>FREE SHIPPING</p>
                <span className={styles.free_desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </span>
              </div>
            </div>
            <div className={styles.free_cards}>
              <div className={styles.free_icon}>
              <i class="fa-solid fa-truck"></i>
              </div>
              <div className={styles.free_desc}>
                <p className={styles.free_title}>FREE SHIPPING</p>
                <span className={styles.free_desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </span>
              </div>
            </div>
            <div className={styles.free_cards}>
              <div className={styles.free_icon}>
                <i class="fa-solid fa-question"></i>
              </div>
              <div className={styles.free_desc}>
                <p className={styles.free_title}>FREE SHIPPING</p>
                <span className={styles.free_desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.collections_container}>
            <div className={styles.women_card}>
              <div className={styles.bos_div2}></div>
              <div className={styles.women_desc_div}>
                <p className={styles.collections}>Collections</p>
                <span className={styles.collection_desc}>Women</span>
              </div>
            </div>
            <div className={styles.children_card}>
              <div className={styles.bos_div2}></div>
              <div className={styles.women_desc_div}>
                <p className={styles.collections}>Collections</p>
                <span className={styles.collection_desc}>Children</span>
              </div>
            </div>
            <div className={styles.men_card}>
              <div className={styles.bos_div2}></div>
              <div className={styles.women_desc_div}>
                <p className={styles.collections}>Collections</p>
                <span className={styles.collection_desc}>Men</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.api_datas_container}>
            {products.map((x) => (
              <div className={styles.container_api} key={x._id}>
                <div onClick={() => addwishList(x)}>
                  {isExitsWishList(x) ? (
                    <i className="fa-solid fa-heart"></i>
                  ) : (
                    <i className="fa-regular fa-heart"></i>
                  )}
                </div>
                <img src={x.image} alt="" className={styles.api_image} />
                <div className={styles.api_desc_container}>
                  <p className={styles.api_title}>{x.title}</p>
                  <p className={styles.api_desc}>{x.desc}</p>
                  <p className={styles.api_price}>${x.price}</p>

                  <button onClick={() => addBasket(x)} className={styles.finding_btn}>add basket</button>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section>
            <div className={styles.big_sale_container}>
                <div className={styles.big_sale}><h2>Big Sale</h2></div>

                <div className={styles.image_and_desc}>

                    <div className={styles.paltarlar_div}>
                        <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg.webp" alt="" />
                    </div>

                    <div className={styles.sale_desc_container}>
                        <p className={styles.less_items}>50% less in all items</p>
                        <span className={styles.by}>By <span className={styles.carl}>Carl Smith</span> • September 3, 2018</span>
                        <p className={styles.sale_desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                        <button className={styles.finding_btn}>SHOP NOW</button>
                    </div>
                </div>

            </div>
        </section>
      </main>
    </>
  );
}

export default Home;

