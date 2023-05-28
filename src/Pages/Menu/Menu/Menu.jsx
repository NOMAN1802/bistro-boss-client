/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title= 'Our menu'></Cover>

            {/* Main cover */}
            <SectionTitle
            subHeading={"Don't miss"}
            heading={"Toy's Offer"}
            >    
            </SectionTitle>

            {/* offered menu items */}
            <MenuCategory
            items = {offered}
            ></MenuCategory>
            
            {/* deserts menu items  */}

            <MenuCategory
            items={ dessert} title = 'dessert' img = {dessertImg}
            >

            </MenuCategory>
            <MenuCategory
            items={ pizza} title = 'pizza'img = {pizzaImg}
            >
            </MenuCategory>
            <MenuCategory
            items={ salad}title = 'salad' img = {saladImg}
             >
            </MenuCategory>
            <MenuCategory
            items={soup} title = 'soup' img = {soupImg}
            >
            </MenuCategory>
             
        </div>
    );
};

export default Menu;