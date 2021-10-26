import React, { useEffect, useState, useContext } from 'react';
import bgyellow from '../../../Assets/SVG/bgYellow.svg';
import courseImg from '../../../Assets/Images/course.png';
import learnImg from '../../../Assets/Images/learn.png';

import MyPreferences from './MyPreferences';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'


function Item(props)
{
    return (
        <Paper>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
            <img src={props.item.image}></img>

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}


const LandingPageContainer = (props) => {

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: bgyellow
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: bgyellow
        }
    ]

    let ary = [1, 2, 3, 4, 5, 4, 23, 2]

    return (
        <>
            <div className="landing-wrapper">
                <div className="greeting-text m-4">
                    <h1 className="font-bold font-xl">{props.greeting}</h1>
                    <h3 className="font-bold font-l">Welcome to Outlearn</h3>
                </div>

                <div className="landing-carousel">
                    <Carousel>
                        {
                            items.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                    
                </div>
                <MyPreferences />


                <div className="horizontal-head"><h2 className="m-2">Webinars</h2> <h3 className="m-2">View All</h3></div>
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


                <div className="horizontal-head mt-5"><h2 className="m-2">Courses for you</h2> </div>
                <div className="horizontal-loop">
                    {
                        ary.map(element => (
                            <div className="courses-card-wrapper">
                                <div className="courses-card-head">
                                    <img src={courseImg}></img>
                                </div>
                                <div className="courses-card-footer">
                                    <div><h4 className="font-bold font-m">Android</h4>
                                        <h5 className="font-bold font-s">Coursera</h5></div>

                                    <div className="courses-card-end mt-2">
                                        <span>Rs 4500</span>  <p>Beginner | 5 * (42k)</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="horizontal-head mt-5"><h2 className="m-2">Videos to learn</h2></div>
                <div className="horizontal-loop">
                    {
                        ary.map(element => (
                            <div className="videos-card-wrapper">
                                <div className="videos-card-footer">
                                    <div className="pb-3">
                                        <h5>Master AI and ML Skills</h5>
                                        {/* <h6> Anurag Patel</h6> */}
                                    </div>
                                    {/* <div>
                                        <h6> 30 Sep, 5:30pm</h6>
                                    </div> */}
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