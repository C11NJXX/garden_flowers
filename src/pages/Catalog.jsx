import React from 'react';

import './css/catalog.css'

import primula from "../resources/img/products/flor1.jpg"
import giraso from "../resources/img/products/flor2.jpg"

import { Link } from 'react-router-dom';

function Catalog() {
  return (
    <>
      <main className='catalog'>
        <div className="products">
          <h3>Available Flowers:<br />(温馨提示：部分花卉还未上架)</h3>
          <div className="content-products content-flores">
            <div className="product">
              <Link to="/product/primula">
                <img src={primula} alt='primula' />
              </Link>
            </div>
            <div className="product">
              <Link to="/product/giraso">
              <img src={giraso} alt='giraso' />
              </Link>
            </div>
          </div>
        </div>
        <div className="products">
          <h3>Available Pots: <br /> 温馨提示：花盆还未上架</h3>
        </div>
      </main>
    </>
  );
}

export default Catalog;