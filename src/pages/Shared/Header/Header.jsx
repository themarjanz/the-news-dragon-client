// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondry'><small>Journalism Without Fear or Favour</small></p>
                {/* <p>{moment().format()}</p> */}
                {/* <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p> */}
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

        </div>
    );
};

export default Header;