import React from 'react';
import './Header.css';
import pic from './location.png';
import downarrow from './down-carot.png';
import search from './search-bar.png';
const Header = () => {
    return (
        <>
            <div className='max-width header'>
                <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
                    alt='zomato' className='header-logo' />
                <div className='header-right' >
                    <div className=' header-location-search-container'>
                        <div className='location-wrapper'>
                            <div className='location-icon-name'>
                                <i className="fa-solid fa-location-dot location  "></i>
                                <div className='location-name'>Meerut</div>
                            </div>
                            <i className="fa-solid fa-caret-down   "></i>
                        </div>
                        <div className='location-search-operator'>
                        </div>
                        <div className='header-search-bar'>
                            <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
                            <input placeholder='Search for Restaurant, Dishes and Cuisines' className='search-input' />


                        </div>
                    </div>
                    <div className="profile-wrapper">
                        <img
                            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                            className="header-profile-image"
                            alt="Profile"
                        />
                        <span className="header-username">DHRUV</span>
                        <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
                    </div>
                </div>
            </div>
        </>);
};
export default Header;