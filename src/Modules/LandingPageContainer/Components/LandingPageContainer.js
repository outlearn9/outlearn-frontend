import React, { useEffect, useState, useContext } from 'react';
import  bgyellow from '../../../Assets/SVG/bgYellow.svg';

import MyPreferences from './MyPreferences';


const LandingPageContainer = () => {

    let ary = [1, 2, 3, 4, 5, 4, 23, 2]

    return (
        <>
            <div className="landing-wrapper">
                <div class="greeting-text m-4">
                    <h1 className="font-bold font-xl">Hi Ankita</h1>
                    <h3 className="font-bold font-l">Welcome to Outlearn</h3>
                </div>

                <div class="landing-carousel">
                    <img src={bgyellow}></img>
                </div>
                <MyPreferences />


                <div class="horizontal-head"><h2 className="m-2">Webinars</h2> <h3 className="m-2">View All</h3></div>
                <div className="horizontal-loop">
                    {
                        ary.map(element => (
                            <div className="webinar-card-wrapper">
                                <div className="webinar-card-footer">
                                    <div>
                                        <h5>Java</h5>
                                        <h6> Anurag Patel</h6>
                                    </div>
                                    <div>
                                        <h6> 30 Sep, 5:30pm</h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default LandingPageContainer;