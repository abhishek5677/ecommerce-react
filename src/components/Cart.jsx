import React from 'react'
import Navbar from './Navbar'
import { useGlobalState } from '../Global/GlobalState'



const CardCheckout = ({ image, title }) => {
    return (

        <div className='card shadow mb-3 d-flex justify-content-center flex-column text-center align-items-center cart-items'>
            <div className='d-flex'>
                <div>
                    <img src={image} alt="" height={100} width={100} />
                </div>
                <div>
                    <p>{title}</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
            </div>
            <button className='btn btn-danger'>Remove</button>
        </div>
    )
}


function Cart() {

    const { globalState } = useGlobalState();

    globalState.cart.map(ele => {
        console.log(ele)
    })

    return (
        <>
            <div className='container mt-3'>
                <Navbar />
                <div className='w-75 m-auto'>
                    <div className="row d-flex">
                        {globalState.cart.length > 0 ? (
                            <>
                                <div className='col-8 mb-4'>
                                    {globalState.cart.map(ele => <CardCheckout image={ele.image} title={ele.title} />)}
                                </div>
                                <div className='col-4 p-0 card shadow checkout-card'>
                                    <div className='price-details'>
                                        <p>PRICE DETAILS</p>
                                    </div>
                                    <div className='d-flex justify-content-between delivery-details'>
                                        <p className='m-0'>Delivery Charges</p>
                                        <p className='text-success m-0'>Free</p>
                                    </div>
                                    <div className='d-flex justify-content-between total-amount'>
                                        <p className='m-0'>Total Amount</p>
                                        <p className='m-0'>₹ 300</p>
                                    </div>
                                </div>
                            </>

                        ) : (
                            <div className='col-md-12 text-center'>
                                <h3>Cart is empty</h3>
                            </div>
                        )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart