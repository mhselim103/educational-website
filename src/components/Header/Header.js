import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import cover from '../../images/cover-removebg-preview.png'

const Header = () => {
    return (
        <div >
            <Menu />
            <div className="header container mt-3">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <h1 className="header-text">Start learning with our experts and give a new way to your career.</h1>
                    </div>
                    <div className="col-md-6 ">
                        <img className="img-fluid" src={cover} alt="" />
                     </div>
                </div>
         </div>
           
</div>
    );
};

export default Header;