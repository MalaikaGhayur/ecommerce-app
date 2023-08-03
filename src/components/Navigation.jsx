import React from 'react'
import './Nav.css';

const Navigation = () => {
    return (
        <div>
            <nav>
                <div className='logo'><span id='shop'>Shop</span><span id='villa'>Villa</span></div>

                <div className='list'>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#products'>Products</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>

                <div className='cart'>

                    <div><span class="material-symbols-outlined">
                        shopping_cart
                    </span></div>
                </div>
            </nav>

        </div>
    )
}

export default Navigation
