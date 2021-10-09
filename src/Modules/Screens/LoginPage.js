import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../Store/Store'
import './ScreenThree.css';
import './LoginPage.css';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '96%',
        },
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    },
}));

const OtpScreen = () => {
    const [state, dispatch] = useContext(Context);

    const { pageNo: pgNo,
        selectedRadio,
        startYear: syear,
        endYear: eyear,
        exp: xp,
        username: uname,
        mobile: mob } = state;

 
    let otpInput = React.createRef();
 
    const [otp, setOtp] = useState('');
    const classes = useStyles();

    // useEffect(() => {
    //     dispatch({ type: 'SET_PAGE', pageNo: pageNo })
    // }, [pageNo]);
    // useEffect(() => {
    //     dispatch({ type: 'SET_SELECTED_RADIO', selectedRadio: selectedValue })
    // }, [selectedValue]);
    // useEffect(() => {
    //     dispatch({ type: 'SET_START_YEAR', startYear: startYear })
    // }, [startYear]);
    // useEffect(() => {
    //     dispatch({ type: 'SET_END_YEAR', endYear: endYear })
    // }, [endYear]);
    // useEffect(() => {
    //     dispatch({ type: 'SET_EXP', exp: exp })
    // }, [exp]);
    // useEffect(() => {
    //     dispatch({ type: 'SET_USERNAME', username: username })
    // }, [username])
    // useEffect(() => {
    //     dispatch({ type: 'SET_MOBILE', mobile: mobile })
    // }, [mobile])


    const handleOtpChange = () => {
        setOtp(otpInput.current.children[0].value);
    }





    return (
        <>
            <div className="text-area-three">
                <div className="line-one login-header">
                    <span>LOG IN
                    </span>
                </div>
            </div>
            <div className="form-area fa-otp">
                <form className={classes.root} noValidate autoComplete="off">
                    <div className="input-area">
                        <div className="input-legends">Mobile No.
                        </div>
                        <Input ref={otpInput} placeholder="+91  |  Enter Mobile Number" onChange={() => handleOtpChange()} inputProps={{ 'aria-label': 'description', 'value': otp }} />
                    </div>

                    {/* <CardActions className='button-skip'>
                        <Button size="small">RESEND OTP</Button>
                    </CardActions> */}
                </form>
            </div >
        </>
    )

}

export default OtpScreen;
