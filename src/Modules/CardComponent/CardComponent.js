import React, { useState, useContext, useEffect } from 'react';
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
import ScreenThree from '../Screens/ScreenThree';
import LoginPage from '../Screens/LoginPage';
import { v4 as uuidv4 } from 'uuid';
import { ApiCall } from '../Controller/Controller';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        position: 'relative'
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
    const { pageNo: page, username, selectedRadio, startYear, endYear, exp, mobile, switchHome, uuid, scrOneOptSelected, scrTwoOptSelected } = state;
    const [pageNo, setPageNo] = useState(page);
    const [isDisabled, setIsDisabled] = useState(false);
    const [homeSwitch, setHomeSwitch] = useState(switchHome);

    useEffect(() => {
        let uuids = localStorage.getItem('visitor_info') && JSON.parse(localStorage.getItem('visitor_info')).uuid ?
            JSON.parse(localStorage.getItem('visitor_info')).uuid :
            uuidv4();
        dispatch({ type: 'SET_UUID', uuid: uuids })
    }, [])

    useEffect(() => {
        if (pageNo === 1 && !Object.keys(scrOneOptSelected).length) {
            setIsDisabled(true);
        } else if (pageNo === 2 && !Object.keys(scrTwoOptSelected).length) {
            setIsDisabled(true);
        } else if (pageNo === 3 && !username && !mobile) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    })

    useEffect(() => {
        dispatch({ type: 'SET_PAGE', pageNo: pageNo })
    }, [pageNo]);

    useEffect(() => {
        dispatch({ type: 'SET_SWITCH_HOME', switchHome: homeSwitch })
    }, [homeSwitch]);

    const handleOtpSubmit = () => {
        setHomeSwitch(true);
        window.location.pathname = '/Home';
    }

    const handleLogin = () => {

    };

    const handleSubmitClick = () => {
        let temp = pageNo < 3 ? setPageNo(pageNo + 1) : pageNo === 3 && mobile ? setPageNo(4) : pageNo === 4 ? handleOtpSubmit() : '';
        if (pageNo === 2) {
            localStorage.setItem("visitor_info", JSON.stringify({ uuid: uuid, specialisation_id: scrOneOptSelected.id, higher_studies_id: scrTwoOptSelected.id }));
            saveVisitorInfo();
        }
        if (pageNo === 3) {
            saveUserProfile();
        }
    }

    const saveVisitorInfo = () => {
        const reqHeader = new Headers();
        reqHeader.append('Content-Type', 'text/json');
        const saveInfoHeader = {
            method: 'POST',
            headers: reqHeader,
            body: JSON.stringify({
                "visitor_id": uuid,
                "specialisation_id": scrOneOptSelected.id,
                "higher_studies_id": scrTwoOptSelected.id
            })
        };
        ApiCall('/api/v1/saveVisitorInfo', saveInfoHeader);
    }

    const saveUserProfile = async () => {
        const reqHeader = new Headers();
        let radioId = selectedRadio === "ug" ? 1 : selectedRadio === "pg" ? 2 : 3;
        reqHeader.append('Content-Type', 'text/json');
        const saveProfileHeader = {
            method: 'POST',
            headers: reqHeader,
            body: JSON.stringify({
                "visitor_id": uuid,
                "email": username,
                "contact": mobile,
                "working_status": radioId,
                "start_year": startYear,
                "end_year": endYear,
                "working_year": exp,
            })
        };
        let saveStatus = await ApiCall('/api/v1/user', saveProfileHeader);
        if (saveStatus.success === "true") {
            sendOtp();
        }
    }

    const sendOtp = async () => {
        const reqHeader = new Headers();
        reqHeader.append('Content-Type', 'text/json');
        const sendOtpHeader = {
            method: 'POST',
            headers: reqHeader,
            body: JSON.stringify({
                "contact": mobile,
            })
        };
        let sendOtpStatus = await ApiCall('/api/v1/sendOtp', sendOtpHeader);
        if (sendOtpStatus.status == 400) {
            alert("User Not Exist");
        }
    }

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

                        {pageNo > 1 ? <>
                            <CardActions className='button-back'>
                                <Button size="small" onClick={() => pageNo > 1 ? setPageNo(pageNo - 1) : ''}>Back</Button>
                            </CardActions>
                            <CardActions className='button-skip'>
                                <Button size="small">Skip</Button>
                            </CardActions>
                        </> : ''}

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
                                <Button variant="contained" color="primary" className="cont-button" onClick={() => handleSubmitClick()} disabled={isDisabled}>
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