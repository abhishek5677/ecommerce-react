import React from 'react'
import { useGlobalState } from '../Global/GlobalState';
import { Link } from "react-router-dom";

function Navbar() {

    const { globalState } = useGlobalState();
    console.log(globalState)

    const cartItemCount = globalState.cart.length;

  return (
        <nav className="navbar bg-body-tertiary bg-secondary rounded mb-4">
            <div className="container p-2 d-flex justify-content-end gap-3">
                <Link className='text-decoration-none' to="/">
                    <h4 className='text-white'>Home</h4>
                </Link>
                <Link to="/cart">
                    <div className='cart-parent position-relative'>
                        <i style={{color: 'white'}} className="fa-solid fa-cart-shopping me-3"></i>
                        <span style={{ color: 'white' }}>{cartItemCount}</span>
                    </div>
                </Link>
                <img src="" alt="" />
            </div>
        </nav>
    )
}

export default Navbar