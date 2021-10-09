import React, { useState, useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Context } from '../../Store/Store'
import './CardComponent.css';
import Img2 from '../../Assets/SVG/img2.svg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ScreenOne from '../Screens/ScreenOne';
import ScreenTwo from '../Screens/ScreenTwo';
import OtpScreen from '../Screens/OtpScreen';
import ScreenThree from '../Screens/ScreenThree'
import Header from '../Header/Header';
import LoginPage from '../Screens/LoginPage';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CardComponent = () => {
    const [state, dispatch] = useContext(Context);
    const { pageNo: page, mobile, switchHome } = state;
    const [pageNo, setPageNo] = useState(page);
    const [homeSwitch, setHomeSwitch] = useState(switchHome)

    useEffect(() => {
        dispatch({ type: 'SET_PAGE', pageNo: pageNo })
    }, [pageNo]);

    useEffect(() => {
        dispatch({ type: 'SET_SWITCH_HOME', switchHome: homeSwitch })
    }, [homeSwitch]);

    const handleOtpSubmit = () => {
        debugger;
        setHomeSwitch(true);
        window.location.pathname = '/Home';
    }

    const handleLogin = () => {

    };

    const classes = useStyles();

    const getPage = () => {
        switch (pageNo) {
            case 1:
                return <ScreenOne />;
                break;
            case 2:
                return <ScreenTwo />;
                break;
            case 3:
                return <ScreenThree />;
                break;
            case 4:
                return <OtpScreen />;
                break;
            default:
                return <ScreenOne />;

        }
    }

    console.warn(state);

    return (
        <div className='main-body'>
            <Card className={classes.root}>

                {!window.location.pathname.match('/login') ?
                    <div className='top-buttons'>
                        <CardActions className='button-back'>
                            <Button size="small" onClick={() => pageNo > 1 ? setPageNo(pageNo - 1) : ''}>Back</Button>
                        </CardActions>
                        {pageNo > 1 ? <CardActions className='button-skip'>
                            <Button size="small">Skip</Button>
                        </CardActions> : ''}

                    </div>
                    :
                    ''
                }

                <CardContent className='card-content'>
                    <div style={{ margin: -16 }}>
                        <img src={Img2} alt='img 2' />
                    </div>
                    <div className='body-component'>
                        {!window.location.pathname.match('/login') ?
                            getPage() :
                            <LoginPage />
                        }
                    </div>
                    <div className='bottom-buttons'>
                        {
                            window.location.pathname.match('/login') ?
                                <Button variant="contained" color="primary" className="cont-button" onClick={() => handleLogin()}>
                                    Log In
                                </Button> :
                                <Button variant="contained" color="primary" className="cont-button" onClick={() => pageNo < 3 ? setPageNo(pageNo + 1) : pageNo === 3 && mobile ? setPageNo(4) : pageNo === 4 ? handleOtpSubmit() : ''}>
                                    {pageNo < 4 ? 'Continue' :
                                        'Submit'}
                                </Button>
                        }


                        {pageNo < 4 && !window.location.pathname.match('/login') ? <div className='pagination-block'>
                            <span>{pageNo}/3</span>
                        </div> : ''}

                    </div>


                </CardContent>

            </Card>
        </div >
    );
}

export default CardComponent;