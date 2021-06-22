import React, { useEffect, useState} from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Dates} from './Banner'
import { Button } from "@material-ui/core";

// this should be called another name. This component is the top navbar when user does not scroll down
export const Header2 = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )

}

// this is the component that contains form and navbar upon scrolling down
function Header({show}) {
    
    return (
        <div className={`header ${show && 'murat'}`}>
            { show &&  <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link> }
           
            <div className='header__center' style={{display:'flex', justifyContent:'space-between', width: '300px', padding: '10px', maxWidth: 500}}>
                <Button variant='outlined'>Location</Button>
                <Dates show={show}/>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Button variant='outlined'>Guests</Button>
                    <div  style={{paddingLeft: '5px'}}><SearchIcon color="black"/></div>
                </div>
            </div>

            { show && <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div> }
        </div>
    )
}

export default Header
