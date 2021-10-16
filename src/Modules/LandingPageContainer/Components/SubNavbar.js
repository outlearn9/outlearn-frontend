import React, { useEffect, useState, useContext } from 'react';
import '../../../Assets/SVG/webinar.svg';
import  Home from '../../../Assets/SVG/home.svg';



const SubNavbar = () => {

    let ary = [1, 2, 3, 4]

    return (
        <>
            <div className="subnavbar-wrapper">
                <ul>
                    <li> <img src={Home}></img> </li>
                    <li> Higher Studies </li>
                    <li> Examinations </li>
                    <li> Internships </li>
                    <li> Webinars </li>
                    <li> Career Ladders </li>
                </ul>
            </div>
        </>
    )
}

export default SubNavbar;