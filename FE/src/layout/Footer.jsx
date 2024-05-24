import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footer_container}>
          <div className={styles.footer_cards}>
           <div>
           <div>
              <h2 className={styles.navigation}>Navigations</h2>
            </div>
            <div className={styles.lists_navigation}>
              <div className={styles.lists_navigation_left}>
                <ul className={styles.navigation_lists}>
                  <li>Sell online</li>
                  <li>Features</li>
                  <li>Shopping cart</li>
                  <li>Store builder</li>
                </ul>
              </div>
              <div className={styles.lists_navigation_middle}>
                <ul className={styles.navigation_lists}>
                  <li>Mobile commerce</li>
                  <li>Dropshipping</li>
                  <li>Website development</li>
                </ul>
              </div>
              <div className={styles.lists_navigation_rigth}>
                <ul className={styles.navigation_lists}>
                  <li>Point of sale</li>
                  <li>Hardware</li>
                  <li>Software</li>
                </ul>
              </div>
            </div>
           </div>
            <div className={styles.promo_container}>
              <h2 className={styles.navigation}>Promo</h2>
              <a href="/home">
                <img
                  src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp"
                  alt=""
                  className={styles.ayaqqabi}
                />
              </a>

              <p className={styles.shoes}>Finding Your Perfect Shoes</p>
              <p className={styles.promo_from}>
                Promo from nuary 15 — 25, 2019
              </p>
            </div>

            <div>
              <div>
                <h2 className={styles.navigation}>Contact Info</h2>
              </div>
              <div className={styles.contact_desc}>
                <div className={styles.about_up_side}>
                  <i class="fa-solid fa-location-dot"></i>
                  <span className={styles.about_from}>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </div>

                <div>
                  <i class="fa-solid fa-phone"></i>
                  <span className={styles.about_from}>+2 392 3929 210</span>
                </div>

                <div>
                  <i class="fa-solid fa-envelope"></i>
                  <span className={styles.about_from}>
                    emailaddress@domain.com
                  </span>
                </div>
              </div>

              <div className={styles.subscribe}>
                <h2 className={styles.navigation}>Subscribe</h2>

                <div className={styles.about_input}>
                  <input type="text" name="" id="" placeholder="Email" />
                  <button>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
{
  /* <div className={styles.footer_cards}>
            <div className={styles.navigation_container}>
              <h2 className={styles.navigation}>Navigations</h2>
              <ul className={styles.navigation_lists}>
                <li>Sell online</li>
                <li>Features</li>
                <li>Shopping cart</li>
                <li>Store builder</li>
              </ul>
            </div>
            <div className={styles.cards_middle}>
              <div className={styles.left_side}>
                <ul>
                  <li>Mobile commerce</li>
                  <li>Dropshipping</li>
                  <li>Website development</li>
                </ul>
              </div>
              <div className={styles.rigth_side}>
                <ul>
                  <li>Point of sale</li>
                  <li>Hardware</li>
                  <li>Software</li>
                </ul>
              </div>
            </div>

            <div>
              <h2>Promo</h2>
              <a href="/home">
                <img
                  src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp"
                  alt=""
                />
              </a>

              <p>Finding Your Perfect Shoes</p>
              <p>Promo from nuary 15 — 25, 2019</p>
            </div>

            <div>
              <h2>Contact Info</h2>
              <div>
                <div>
                  <i class="fa-solid fa-location-dot"></i>
                  <span>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </div>

                <div>
                  <i class="fa-solid fa-phone"></i>
                  <span>+2 392 3929 210</span>
                </div>

                <div>
                  <i class="fa-solid fa-envelope"></i>
                  <span>emailaddress@domain.com</span>
                </div>
              </div>

              <div>
                <h2>Subscribe</h2>

                <input type="text" name="" id="" placeholder="Email" />
                <button>SEND</button>
              </div>
            </div>
          </div>

          <div></div> */
}
export default Footer;
