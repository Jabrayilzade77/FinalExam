import React, { useEffect, useState } from "react";
import styles from "./Admin.module.scss";
import {Helmet} from "react-helmet";



function Admin() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("")

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp/");
    const data = await res.json();

    setProducts(data);
  }

  async function deleteProducts(id) {
    const res = await fetch("http://localhost:3000/myapp/" + id, {
      method: "delete",
    });
    const data = await res.json();

    getAllProducts();
  }

  function ascSorted() {
    setProducts([...products.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))])
  }

  function decSorted() {
    setProducts([...products.sort((a,b) => (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0))])
  }

  function decSortedByPrice() {
    setProducts([...products.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))])
  }

  function ascSortedByPrice() {
    setProducts([...products.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
  }
  return (
    <>
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Admin Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
  <div className={styles.admin_inputs}>
  <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} name="" id="" placeholder="search"/>
    <button onClick={()=>ascSorted()}>a-z</button>
    <button onClick={()=>decSorted()}>z-a</button>
    <button onClick={()=>ascSortedByPrice()}>price inc</button>
    <button onClick={()=>decSortedByPrice()}>price dec</button>
  </div>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>title</th>
            <th>desc</th>
            <th>price</th>
            <th>option</th>
          </tr>
        </thead>
        <tbody>
          {products
          .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
          .map((x) => (
            <tr>
              <td>
                <img src={x.image} alt="" />
              </td>
              <td>{x.title}</td>
              <td>{x.desc}</td>
              <td>${x.price}</td>
              <td>
                <button onClick={() => deleteProducts(x._id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
