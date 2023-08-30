import React, { useState } from 'react';
import './Showproducts.css';
import femaleshirt from './images/femaleshirt.png';
import clothes from './images/clothes.png';
import jacket from './images/jacket.png';
import watch from './images/watch.png';
import { Link } from 'react-router-dom';
const Showproducts = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className='product-container'>
            <div className='product-box'>
                <div className='product-image'>
                    <img src={femaleshirt} alt='Female Shirt' />
                </div>
                <div className='product-info'>
                    <h3>Dress</h3>
                    <div className='rating'>
                        <span class="material-symbols-outlined">star_rate</span>
                        <span class="material-symbols-outlined">star_rate</span>
                        <span class="material-symbols-outlined">star_rate</span>
                        <span class="material-symbols-outlined">star_rate</span>
                        <span class="material-symbols-outlined">star_rate</span>
                    </div>
                    <h4>Details:</h4>
                    <p>Top notch Dresses</p>
                    <p>$500</p>
                    <div className='quantity'>
                        <p className='quantity-label'>Quantity:</p>
                        <div className='plus-minus'>
                            <button className='btn btn-minus border border-dark' onClick={decrement}>-</button>
                            <h2 className='quantity-count'>{count}</h2>
                            <button className='btn btn-plus border border-dark' onClick={increment}>+</button>
                        </div>
                    </div>

                    <div className='action-buttons'>
                        <Link to="/More">
                            <button className='btn btn-light btn-sm border border-dark'>Add To Cart</button>
                        </Link>
                        <button className='btn btn-dark btn-sm'>Buy Now</button>
                    </div>
                </div>
            </div>
            <h2 id>You May also Like</h2>
            <div className='other-images'>
                <img src={femaleshirt} alt='Female Shirt' />
                <img src={clothes} alt='clothes' />
                <img src={jacket} alt='jacket' />
                <img src={watch} alt='watch' />
            </div>
        </div>
    );
}

export default Showproducts;
