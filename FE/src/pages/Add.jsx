import React from 'react'
import {Helmet} from "react-helmet";



import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

function Add() {
  return (
    <>
     <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
     <Formik
       initialValues={{ image: '', title: '', desc: '',price:'' }}
       validationSchema={Yup.object({
         image: Yup.string()
           .required('Required'),
         title: Yup.string()
           .required('Required'),
         desc: Yup.string().required('Required'),
         price: Yup.number()
         .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {

        async function addProducts() {
          const res = await fetch("http://localhost:3000/myapp/",{method:"post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
        }
        addProducts()
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="image">image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <label htmlFor="title">title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="desc">desc </label>
         <Field name="desc" type="text" />
         <ErrorMessage name="desc" />

         <label htmlFor="price">price </label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </>
  )
}

export default Add