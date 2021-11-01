import React, { useEffect, useState, useContext } from 'react';
import bgyellow from '../../../Assets/SVG/bgYellow.svg';
import courseImg from '../../../Assets/Images/course.png';
import learnImg from '../../../Assets/Images/learn.png';
import articlesImg from '../../../Assets/Images/articles.png';
import arrowRight from '../../../Assets/SVG/arrowRight.svg';
import MyPreferences from './MyPreferences';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import HorizontalScroll from '../Components/HorizontalScrollComponent';




function Item(props) {
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

const onRightArrow = () => {
    let i = 0
    const ref = document.querySelector('.hl-1');
    ref.scroll(ref.scrollLeft + 100, 0)
    i = i + 100
    console.log(ref.scrollWidth);
    console.log(ref.scrollLeft + 100);

}



const LandingPageContainer = (props) => {

    useEffect(() => {
        const ref = document.querySelector('.hl-1');
        ref.onscroll = () => {
          
          console.log('hi');
        }
      }, []);

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


                <HorizontalScroll />


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

                <div className="horizontal-head mt-5"><h2 className="m-2">Articles on Information Technology </h2> </div>
                <div className="horizontal-loop">
                    {
                        ary.map(element => (
                            <div className="articles-card-wrapper">
                                <div className="articles-card-head">
                                    <img src={articlesImg}></img>
                                </div>
                                <div className="articles-card-footer">
                                    <div>
                                        <h5 className="font-bold font-s">History of Data Science  </h5></div>
                                    <p className="pt-2 c-grey">Mohit Thakur, Jan 2021</p>
                                    <p className="pt-1 c-black">Understand the history of data science and its development</p>
                                    <div className="articles-card-end mt-2">
                                        <span>10 min</span>
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