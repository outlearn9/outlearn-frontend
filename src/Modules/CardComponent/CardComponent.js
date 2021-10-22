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
import OtpVerifyPage from '../Screens/OtpVerifyPage';


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
    const { pageNo: page, username, otp, selectedRadio, startYear, endYear, exp, mobile, switchHome, uuid, scrOneOptSelected, scrTwoOptSelected } = state;
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
        dispatch({ type: 'SET_MOBILE', mobile: mobile })
    }, [mobile])

    useEffect(() => {
        const RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const RegexMob = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
        const RegexOtp = /^[0-9]{4,6}$/;

        if (pageNo === 1 && !Object.keys(scrOneOptSelected).length) {
            setIsDisabled(true);
        } else if (pageNo === 2 && !Object.keys(scrTwoOptSelected).length) {
            setIsDisabled(true);
        } else if (pageNo === 3 && (!username || !mobile || !RegexEmail.test(username) || !RegexMob.test(mobile))) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }

        if (window.location.pathname.match('/verify-otp') || pageNo === 4) {
            if (!RegexOtp.test(otp)) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false)
            }
        }

    })


    useEffect(() => {
        dispatch({ type: 'SET_PAGE', pageNo: pageNo })
    }, [pageNo]);

    useEffect(() => {
        dispatch({ type: 'SET_SWITCH_HOME', switchHome: homeSwitch })
    }, [homeSwitch]);

    const handleOtpSubmit = async () => {
        // setHomeSwitch(true);
        console.log(state);
        const reqHeader = new Headers();
        reqHeader.append('Content-Type', 'text/json');
        const saveProfileHeader = {
            method: 'POST',
            headers: reqHeader,
            body: JSON.stringify({
                "otp": '1234',
                "contact": state.mobile ? state.mobile : localStorage.getItem('mobile'),
            })
        };
        let response = await ApiCall('/api/v1/verifyOtp', saveProfileHeader);
        if (response.success === "true") {
            console.log(response);
            localStorage.setItem('token', response.data.token)
            window.location.pathname = '/';
        } else if (response.success === "false") {
            alert(response.message)
        }
    }

    const handelSkip = () => {
        window.location.pathname = '/';
    }

    const handleLogin = async () => {
        console.log(state);
        const reqHeader = new Headers();
        reqHeader.append('Content-Type', 'text/json');
        const sendOtpHeader = {
            method: 'POST',
            headers: reqHeader,
            body: JSON.stringify({
                "contact": state.mobile ? state.mobile : localStorage.getItem('mobile'),
            })
        };
        let sendOtpStatus = await ApiCall('/api/v1/sendOtp', sendOtpHeader);
        if (sendOtpStatus.status == 201) {
            console.log(sendOtpStatus);
            localStorage.setItem('mobile', state.mobile)
            window.location.pathname = '/verify-otp';
            // setMobile(mobileInput.current.children[0].value);
        }
        if (sendOtpStatus.status == 400) {
            alert("User Not Exist");
        }
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
            setTimeout(() => {
                sendOtp();
            }, 3000);
        }
    }

    const sendOtp = async () => {
        const reqHeader = new Headers();
        reqHeader.append('Content-Type', 'text/json');
        const sendOtpHeader = {
            method: 'POST',
            headers: reqHeader,
            body: JSON.stringify({
                "contact": mobile ? mobile : localStorage.getItem('mobile'),
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
                                {state.pageNo > 1 ? <Button onClick={() => handelSkip()} size="small">Skip</Button> : ''}
                            </CardActions>
                        </> : ''}

                    </div>
                    :
                    ''
                }

                <CardContent className='card-content'>
                    <div className="header-img" style={{ margin: -16 }}>
                        <img src={Img2} alt='img 2' />
                    </div>
                    <div className='body-component'>
                        {window.location.pathname.match('/login') ?
                            <LoginPage /> : ''
                        }
                        {window.location.pathname.match('/verify-otp') ?
                            <OtpVerifyPage /> : ''
                        }
                        {!window.location.pathname.match('/verify-otp') && !window.location.pathname.match('/login') ?
                            getPage() : ''
                        }
                    </div>
                    <div className='bottom-buttons flexbox'>
                        {
                            window.location.pathname.match('/login') ?
                                <Button variant="contained" color="primary" size="large" className="cont-button" onClick={() => handleLogin()}>
                                    Log In
                                </Button> : ''
                        }

                        {
                            window.location.pathname.match('/verify-otp') ?
                                <Button variant="contained" color="primary" className="cont-button" onClick={() => handleOtpSubmit()} disabled={isDisabled}>
                                    Submit
                                </Button> : ''
                        }
                        {!window.location.pathname.match('/verify-otp') && !window.location.pathname.match('/login') ?
                            <Button variant="contained" color="primary" className="cont-button" onClick={() => handleSubmitClick()} disabled={isDisabled}>
                                {pageNo < 4 ? 'Continue' :
                                    'Submit'}
                            </Button> : ''
                        }

                        {
                            window.location.pathname.match('/login') ?
                                <div className="flexbox">
                                    <CardActions className='button-skip'>
                                        <Button size="small" onClick={() => window.location.pathname = '/onboarding'}>Sign up</Button>
                                    </CardActions>
                                </div>
                                : ''
                        }


                        {pageNo < 4 && !window.location.pathname.match('/login') && !window.location.pathname.match('/verify-otp') ? <div className='pagination-block flexbox'>
                            <span>{pageNo}/3</span>
                        </div> : ''}

                    </div>

                </CardContent>

            </Card>
        </div >
    );
}

export default CardComponent;