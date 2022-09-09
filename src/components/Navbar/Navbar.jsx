import { useState } from "react";
import "./Navbar.scss";
import { Button } from "../Button/Button";

export function Navbar({ logo }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} className='logo' alt='logo' />
      <button
        className='hamburger'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4 6H20M4 12H20M4 18H20'
            stroke='#9CA3AF'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded
            ? "mobile-nav-backdrop expanded"
            : "mobile-nav-backdrop closed"
        }
        onClick={() => setIsNavExpanded(false)}
      />
      <ul
        className={
          isNavExpanded ? "links-container expanded" : "links-container closed"
        }
      >
        <div className='mobile-nav-menu-header'>
          <img src={logo} className='mobile-logo' alt='logo' />
          <svg
            onClick={() => {
              setIsNavExpanded(false);
            }}
            className='close-menu-icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 18L18 6M6 6L18 18'
              stroke='#9CA3AF'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <li className='nav-link'>Product</li>
        <li className='nav-link'>Features</li>
        <li className='nav-link'>Marketplace</li>
        <li className='nav-link'>Company</li>
        <Button className='mobile-nav-btn indigo'>Start free trial</Button>
        <span className='mobile-nav-text-link'>
          Existing customer? <span className='black'>Login</span>
        </span>
      </ul>
      <div className='btn-container'>
        <button className='text-link'>Log in</button>
        <Button className='gray'>Start free trial</Button>
      </div>
    </nav>
  );
}
