import React from 'react'
import {Helmet} from "react-helmet";


function Shop() {
  return (
    <div>
      <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Shop Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    </div>
  )
}

export default Shop