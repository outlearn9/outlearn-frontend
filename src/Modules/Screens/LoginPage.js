import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../Store/Store'
import './ScreenThree.css';
import './LoginPage.css';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


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

    const { mobile: mob } = state;
    let mobileInput = React.createRef();
 
    const [value, setValue] = useState()
    const [otp, setOtp] = useState('');
    const [mobile, setMobile] = useState(mob);

    useEffect(() => {
        dispatch({ type: 'SET_MOBILE', mobile: mobile })
    }, [mobile])

    const classes = useStyles();


    const handleOtpChange = () => {
        setOtp(mobileInput.current.children[0].value);
        setMobile(mobileInput.current.children[0].value);
    }

    return (
        <>
            <div className="text-area-three">
                <div className="line-one login-header">
                    <span>LOG IN
                    </span>
                </div>
            </div>
            <div className="form-area fa-otp login-wrap">
                <form className={classes.root} noValidate autoComplete="off">
                    <div className="input-area">
                        <div className="input-legends">Mobile No.
                        </div>
                        <PhoneInput
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="IN"
                            value={mobile}
                            onChange={setMobile}/>
                        {/* <Input ref={mobileInput} value="+918532877445" placeholder="+91  |  Enter Mobile Number" onChange={() => handleOtpChange()} inputProps={{ 'aria-label': 'description', 'value': otp }} /> */}
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
