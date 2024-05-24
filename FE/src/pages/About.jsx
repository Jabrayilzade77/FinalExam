import React from 'react'
import {Helmet} from "react-helmet";


function About() {
  return (
    <div>
       <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    </div>
  )
}

export default About