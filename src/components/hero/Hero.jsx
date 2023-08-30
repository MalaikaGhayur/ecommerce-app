import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='main'>
            <div className='sub-main'>
                <div className='image-slider'>
                    <div class="hero-content">
                        <h1 class="hero-title">Discover Your Perfect Shopping Experience at ShopVilla</h1>
                        <p class="hero-subtitle">Explore our curated collections and find the latest trends in fashion, electronics, home decor, and more.</p>
                        <Link to="/Showproducts">
                            <button type="button" class="btn btn-dark  btn-lg">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
