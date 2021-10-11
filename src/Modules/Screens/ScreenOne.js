import React from 'react';
import './ScreenOne.css';
import Img1 from '../../Assets/SVG/img1.svg';
import { scrOne } from '../Metadata/Constants';
import Button from '@material-ui/core/Button';
const ScreenOne = () => {

    return (
        <>
            <div className='img1'>
                <img src={Img1} alt='img 1' />
            </div>
            <div className="text-area">
                <div className="line-first">
                    <span>Please tell us your interests to help us guide you better.</span>
                </div>
                <div className="line-two">
                    <span>Which <span>specialisation</span> are you most <br /> intersted in?</span>
                </div>
                <div className="line-three">
                    <span>
                        You can select multiple options
                    </span>
                </div>
                <div className="opt-area">
                    {scrOne.map((itm,index) => {
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

export default ScreenOne;
