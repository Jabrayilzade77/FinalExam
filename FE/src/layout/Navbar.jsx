import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketProvider";
import { WishListContext } from "../context/WishListProvider";
import styles from "./Navbar.module.scss";

function Navbar() {
  const { basket } = useContext(BasketContext);
  const { wishList } = useContext(WishListContext);

  return (
    <>
      <div>
        <div>
          <div className={styles.navbar_container}>
            <div className={styles.search_div}>
              <input type="text" name="" id="" placeholder="Search" />
            </div>

            <div className={styles.shoppers_div}>
              <h2>SHOPPERS</h2>
            </div>
            <div className={styles.icons_div}>
              <i className="fa-solid fa-person"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-basket-shopping"></i>
            </div>
          </div>
        </div>

        <div className={styles.navbar_links}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/add"}>Add </Link>
          <Link to={"/admin"}>Admin</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/basket"}>Basket {basket.length}</Link>
          <Link to={"/wishList"}>WishList {wishList.length}</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
