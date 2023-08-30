import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-main'>
            <footer className=" text-center text-black mt-5 bg-secondary bg-light">
                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-google"></i>
                        </a>

                        <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>

                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for discounts and offers</strong>
                                    </p>
                                </div>

                                <div className="col-md-4 col-10">
                                    <div className="form-outline form-black mb-4">
                                        <input type="email" id="form5Example21" className="form-control" placeholder="Email" />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-black mb-4 align-items-center">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>

                    <section className="mb-4">
                        <p>
                            ShopVilla: Your Ultimate Destination for Trendsetting Fashion and Lifestyle Products.
                            Discover a World of Style and Convenience at ShopVilla – Where Shopping Meets Elegance.
                        </p>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: "black" }}>
                    {/* <span id='copyright-color'>&copy; 2023 Copyright</span> */}
                    <a className="text-white" style={{ textDecoration: "none" }} href="https://ShopVilla.com/">&copy; 2023 Copyright  ShopVilla.com</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
