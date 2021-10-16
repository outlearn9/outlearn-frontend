import React, { useEffect, useState, useContext } from 'react';
import '../../../Assets/SVG/webinar.svg';


const MyPreferences = () => {

    let ary = [1, 2, 3, 4]

    return (
        <>
            <div className="preference-wrapper mb-5 mt-5">
                <div class="horizontal-head"><h2 className="m-2">My Preference</h2> <h3 className="m-2">Edit</h3></div>
                <div className="horizontal-loop mt-2 mb-2">
                    {
                        ary.map(element => (
                           <div class="preference-card"> Software Engineering </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default MyPreferences;