import React from 'react';
import './TeslaAccount.css'
import {Link, useHistory} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useDispatch, useSelector } from 'react-redux';
import { loginout, selectUser } from './features/userSlice';
import Car from './Car';
import { auth } from './firebase';

const TeslaAccount = ({ isMenuOpen, setIsMenuOpen }) => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const history = useHistory()

    const logoutOfApp = () => {
        auth.signOut().then(() => {
            dispatch(loginout())
            // history.push('/')
        }).catch((error)=> alert(error.message));
    }

    return (
        <div className='teslaAccount'>
            <div className='teslaAccount__header'>
                <div className='teslaAccount__logo'>
                    <Link to='/'>
                        <img 
                            className=""
                            src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
                            alt=''
                        />
                    </Link>
                </div>
                <div className='teslaAccount__links'>
                    <Link to="/teslaaccount">Model S</Link>
                    <Link to="/teslaaccount">Model X</Link>
                    <Link to="/teslaaccount">Model Y</Link>
                    <Link to="/teslaaccount">Solar Roof</Link>
                    <Link to="/teslaaccount">Solar panel</Link>
                    <Link to="/teslaaccount">Shop</Link>
                    <Link to="/teslaaccount">Tesla Account</Link>
                    <Link to='/' onClick={logoutOfApp}>Log Out</Link>
                    <div className='teslaAccount__menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? 
                        <CloseIcon className='teslaAcount__closeMenu' /> : <MenuIcon />}
                    </div>
                </div>
            </div>
            <div className='teslaAccount__info'>
                <div className='teslaAccount__person'>
                    <h4>{user?.displayName + "'s"}</h4>
                </div>
                <div className="teslaAccount__infoRight">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Account</Link>
                    <Link to='/'>History</Link>
                    <Link to='/' onClick={logoutOfApp}>Sign Out</Link>
                </div>
            </div>
            <div className="teslaAccounto__car">
                <Car 
                    imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815'
                    model='model s' 
                    testDrive 
                />
                <Car 
                    imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815' 
                    model='model x'  
                />
            </div>
        </div>
    )
}

export default TeslaAccount
