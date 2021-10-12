import React, { useEffect, useState, useContext } from 'react';
import './ScreenOne.css';
import Img1 from '../../Assets/SVG/img1.svg';
// import { scrOne } from '../Metadata/Constants';
import Button from '@material-ui/core/Button';
import { Context } from '../../Store/Store'

const ScreenOne = () => {
    const [state, dispatch] = useContext(Context);
    const { scrOneOpt } = state;
    const [selectedOpt, setSelectedOpt] = useState({});


    const handleSelection = (item) => {
            setSelectedOpt(item); 
    }
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
                    {scrOneOpt.map((itm) => {
                        return (
                            <Button variant="contained" key={itm.id} color="primary" onClick={() => handleSelection(itm)} className={selectedOpt && selectedOpt.id === itm.id ? "opt-button opt-selected" : "opt-button "}>
                                {itm.speicialization}
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
