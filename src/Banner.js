import React, { useState, useEffect } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";
import Header from './Header';
import { Header2 } from './Header'

// Dates component renders button that onclick shows user a date range picker. in report i said that i want to merge check in and check out buttons to this.
export const Dates = ({show}) => {
    const [showSearch, setShowSearch] = useState(false);
    return (
    <div className='banner__search'>
        {showSearch && <Search show={show} />}
        <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
            {showSearch ? "Hide" : "Search Dates"}
        </Button>
    </div>
    )
}

// Covid info component
export const Covid = () => {
    return (
        <div className='banner__search' >
            <div className="covid"><a href="">Get info about covid</a></div>
        </div>
    )
}

// Banner component holds the search form and top navbar 
function Banner() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 330) {
          handleShow(true);
        } else handleShow(false);
        return () => {
          window.removeEventListener("scroll");
        };
      });
    }, []);

    return (
        <div className={`banner ${show ? "suka" : ""}`}>
            <Header2 />

            <div className='banner__info'>
                <Header show={show}/>
            </div>
        </div>
    )
}

export default Banner
