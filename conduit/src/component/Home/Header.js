import React from 'react';
import './style.css';

const Header = () => {
    return (
        <nav className='navbar navbar-light'>
            <div className='container' style={{width:'70%'}}>
                <a href="/" className='navbar-brand fw-bolder fs-4' style={{color:'rgb(73, 204, 73)'}}>conduit</a>

                {/* Show before user login */}
                {/* <ul className='nav flex'>
                    <li className='nav-item'>
                        <a href='/' className='nav-link' style={{color:'gray'}}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link linkHeader' style={{color:'lightGray'}}>Sign in</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link linkHeader' style={{color:'lightGray'}}>Sign up</a>
                    </li>
                </ul> */}

                {/* Show after user login */}
                <ul className='nav flex'>
                    <li className='nav-item'>
                        <a href='/' className='nav-link' style={{color:'gray'}}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link linkHeader' style={{color:'lightGray'}}>
                            <i className='fa fa-square-pen'></i>
                            &nbsp; New Article
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link linkHeader' style={{color:'lightGray'}}>
                            <i className='fa fa-gear'></i>
                            &nbsp; Settings
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link d-flex align-items-center linkHeader' style={{color:'lightGray'}}>
                            <i className='fa fa-face-laugh-squint fs-4'></i>
                            &nbsp; Account
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Header;
