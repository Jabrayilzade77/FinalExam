import React, { useContext } from 'react'
import { WishListContext } from '../context/WishListProvider'
import {Helmet} from "react-helmet";


function WishList() {

  const {wishList,isExitsWishList,addwishList} = useContext(WishListContext)
  return (
   <>
   <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>WisList Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
   {wishList.map(x=>(
        <div>
          <div onClick={()=>addwishList(x)}>{isExitsWishList(x) ? <i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}</div>
            <img src={x.image} alt="" />
            <div>
                <p>{x.title}</p>
                <p>{x.desc}</p>
                <p>${x.price}</p>

            </div>
        </div>
    ))}
   </>
  )
}

export default WishList