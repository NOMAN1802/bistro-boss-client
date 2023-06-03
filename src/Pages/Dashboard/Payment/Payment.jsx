/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hooks/useCart';

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum,item)=> sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    // const total = cart.reduce((sum, item)=>  item.price + sum, 0);
    return (
        <div>
            <SectionTitle subHeading={'Please Process'} heading={'Payment'}></SectionTitle>
            <h2 className='text-3xl'>Taka Taka</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm
                 price={price}
                 cart={cart}
                 >

                 </CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;