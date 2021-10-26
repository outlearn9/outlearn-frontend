import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../Store/Store'
import './ScreenThree.css';
import './OtpScreen.css';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { ApiCall } from '../Controller/Controller';


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

const OtpScreenLogin = () => {
    const [state, dispatch] = useContext(Context);
    const [counter, setCounter] = React.useState(10);

    const { pageNo: pgNo,
        selectedRadio,
        startYear: syear,
        endYear: eyear,
        exp: xp,
        username: uname,
        mobile } = state;

 
    let otpInput = React.createRef();
 
    const [otp, setOtp] = useState('');
    const classes = useStyles();


    const handleOtpChange = () => {
        setOtp(otpInput.current.children[0].value);
    }

    useEffect(()=>{
        dispatch({ type: 'SET_OTP', otp: otp });
    },[otp])


    const sendOtp = async () => {
        const reqHeader = new Headers();
        reqHeader.append('Content-Type', 'text/json');
        const sendOtpHeader = {
            method: 'POST',
            headers: reqHeader,
            body: JSON.stringify({
                "contact": mobile?mobile:localStorage.getItem('mobile'),
            })
        };
        let sendOtpStatus = await ApiCall('/api/v1/sendOtp', sendOtpHeader);
        if (sendOtpStatus) {
            alert(sendOtpStatus.message);
        }
        // if (sendOtpStatus.status == 400) {
        //     alert("User Not Exist");
        // }
    }

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
    

    return (
        <>
            <div className="text-area-three transform-50">
                <div className="line-one">
                    <span>Enter the code generated on your mobile device {localStorage.getItem('mobile')}
                    </span>
                </div>
            </div>
            <div className="form-area fa-otp otp-wrap">
                <form className={classes.root} noValidate autoComplete="off">
                    <div className="input-area">
                        <div className="input-legends">Confirm OTP
                        </div>
                        <Input className="otp-input" ref={otpInput} placeholder="Enter OTP" onChange={() => handleOtpChange()} inputProps={{ 'aria-label': 'description', 'value': otp }} />
                    </div>

                    <CardActions className='button-skip'>
                        <Button size="small" disabled={counter > 1} onClick={()=>sendOtp()}>Resend OTP</Button> {counter > 0 ? <p class="font-xs"> in {counter}</p> : ''} 
                    </CardActions>
                </form>
            </div >
        </>
    )

}

export default OtpScreenLogin;
