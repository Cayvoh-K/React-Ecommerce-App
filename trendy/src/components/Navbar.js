import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';


const CartIcon = ({ count }) => {
    return (
      <div className="cartIcon">
        <FaShoppingCart />
        {count > 0 && <span className="cartCount">{count}</span>}
      </div>
    );
  };
  
const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}

        >
            <span className="logo">ShopEase Market</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <CartIcon count={items.length} size={24} />
            </div>
        </div>
    );
};

export default Navbar;