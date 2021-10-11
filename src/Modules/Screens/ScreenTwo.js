import React from 'react';
import './ScreenTwo.css';
import Img3 from '../../Assets/SVG/Img3.svg';
import { scrTwo } from '../Metadata/Constants';
import Button from '@material-ui/core/Button';
const ScreenTwo = () => {

    return (
        <>
            <div className='img1'>
                <img src={Img3} alt='img 1' />
            </div>
            <div className="text-area-two">
                {/* <div className="line-first">
                    <span>Please tell us your interests to help us guide you better.</span>
                </div> */}
                <div className="line-two">
                    <span>Great! Choose your most preferred <span>alternative <br /> career path </span>if any.
                    </span>
                </div>
                {/* <div className="line-three">
                    <span>
                        You can select multiple options
                    </span>
                </div> */}
                <div className="opt-area-two">
                    {scrTwo.map((itm,index) => {
                        return (
                            <Button variant="contained" key={index} color="primary" className={itm.selected ? "opt-button opt-selected" : "opt-button "}>
                                {itm.option}
                            </Button>
                        )

                    })}
                    {/* 
                    <span className="add-more">+add more</span> */}

                </div>
            </div>
        </>
    )

}

export default ScreenTwo;
