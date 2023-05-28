/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import { GiHamburger } from 'react-icons/gi';
import useCart from '../hooks/useCart';
const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservations' ><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaShoppingCart></FaShoppingCart>Payment history </NavLink></li>
                    <li>
                        <NavLink to='/dashboard/mycart'>
                        <FaWallet></FaWallet>My Cart
                        <span className="badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>
                        
                        </li>

                    <div className="divider"></div>

                    <li> <NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'><GiHamburger></GiHamburger> Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;