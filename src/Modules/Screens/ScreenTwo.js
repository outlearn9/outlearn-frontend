import React, { useEffect, useState, useContext } from 'react';
import './ScreenTwo.css';
import Img3 from '../../Assets/SVG/Img3.svg';
import Button from '@material-ui/core/Button';
import { Context } from '../../Store/Store'
const ScreenTwo = () => {
    const [state, dispatch] = useContext(Context);
    const { scrTwoOpt,scrTwoOptSelected } = state;
    const [selectedOpt, setSelectedOpt] = useState(scrTwoOptSelected);

    const handleSelection = (item) => {
            setSelectedOpt(item); 
    }

    useEffect(()=>{
        dispatch({ type: 'SET_SCRTWO_OPT_SELECTED', scrTwoOptSelected: selectedOpt })
    },[selectedOpt])
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
                    {scrTwoOpt.map((itm) => {
                        return (
                            <Button variant="contained" key={itm.id} color="primary" onClick={() => handleSelection(itm)} className={selectedOpt && selectedOpt.id === itm.id ? "opt-button opt-selected" : "opt-button "}>
                                {itm.name}
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
