import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../Store/Store'
import './ScreenThree.css';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

const ScreenThree = () => {
    const [state, dispatch] = useContext(Context);

    const { pageNo: pgNo,
        selectedRadio,
        startYear: syear,
        endYear: eyear,
        exp: xp,
        username: uname,
        mobile: mob } = state;

    let usernameInput = React.createRef();
    let mobileInput = React.createRef();
    const [pageNo, setPageNo] = useState(pgNo);
    const [selectedValue, setSelectedValue] = useState(selectedRadio);
    const [startYear, setStartYear] = useState(syear);
    const [endYear, setEndYear] = useState(eyear);
    const [exp, setExp] = useState(xp);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [username, setUsername] = useState(uname);
    const [mobile, setMobile] = useState(mob);
    const classes = useStyles();
    const yearArr = [];
    const expArr = [];

    useEffect(() => {
        dispatch({ type: 'SET_PAGE', pageNo: pageNo })
    }, [pageNo]);
    useEffect(() => {
        dispatch({ type: 'SET_SELECTED_RADIO', selectedRadio: selectedValue })
    }, [selectedValue]);
    useEffect(() => {
        dispatch({ type: 'SET_START_YEAR', startYear: startYear })
    }, [startYear]);
    useEffect(() => {
        dispatch({ type: 'SET_END_YEAR', endYear: endYear })
    }, [endYear]);
    useEffect(() => {
        dispatch({ type: 'SET_EXP', exp: exp })
    }, [exp]);
    useEffect(() => {
        dispatch({ type: 'SET_USERNAME', username: username })
    }, [username])
    useEffect(() => {
        dispatch({ type: 'SET_MOBILE', mobile: mobile })
    }, [mobile])



    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleChangeStart = (event) => {
        setStartYear(event.target.value);
    };

    const handleChangeEnd = (event) => {
        setEndYear(event.target.value);
    };

    const handleChangeExp = (event) => {
        setExp(event.target.value);
    };
    const handleCloseOne = () => {
        setOpenOne(false);
    };

    const handleCloseTwo = () => {
        setOpenTwo(false);
    };
    const handleOpenOne = () => {
        setOpenOne(true);
    };
    const handleOpenTwo = () => {
        setOpenTwo(true);
    };
    const handleUserChange = () => {
        setUsername(usernameInput.current.children[0].value)
    }
    const handleMobileChange = () => {
        setMobile(mobileInput.current.children[0].value);
    }




    for (let count = 1990; count <= new Date().getFullYear(); count++) {
        yearArr.push(count);
    }

    for (let data = 0; data <= 26; data++) {
        data < 26 ? expArr.push(data) : expArr.push('25+');
    }


    return (
        <>
            <div className="text-area-three">
                <div className="line-one">
                    <span>Last step! We would require some <span>basic info</span> for us to <br /> build your profile.
                    </span>
                </div>
            </div>
            <div className="form-area">
                <form className={classes.root} noValidate autoComplete="off">
                    <div className="input-area">
                        <div className="input-legends">Name</div>
                        <Input ref={usernameInput} placeholder="Type Name" onChange={() => handleUserChange()} inputProps={{ 'aria-label': 'description', 'value': username }} />
                    </div>
                    <div className="input-area">
                        <div className="input-legends">Mobile<span>*You will recieve a verification code</span>
                        </div>
                        <Input ref={mobileInput} placeholder="+91 | Mobile Number" onChange={() => handleMobileChange()} inputProps={{ 'aria-label': 'description', 'value': mobile }} />
                    </div>

                    <div className="input-area">
                        <Checkbox
                            style={{
                                transform: "scale(.7)",
                            }}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        /> <span className="leg-text"> This is my whatsapp number
                        </span>
                    </div>

                    <div className="input-area">
                        <div className="input-legends">You are a
                        </div>
                        <div className="radio-container">
                            <Radio
                                checked={selectedValue === 'ug'}
                                onChange={handleChange}
                                value="ug"
                                name="radio-button-demo"
                                // inputProps={{ 'aria-label': 'A' }}
                                color="primary"
                            /><span>UG Student</span>
                            <Radio
                                checked={selectedValue === 'pg'}
                                onChange={handleChange}
                                value="pg"
                                name="radio-button-demo"
                                // inputProps={{ 'aria-label': 'C' }}
                                color="primary"
                            /><span>PG Student</span>
                            <Radio
                                checked={selectedValue === 'wp'}
                                onChange={handleChange}
                                value="wp"
                                name="radio-button-demo"
                                // inputProps={{ 'aria-label': 'B' }}
                                color="primary"
                            /><span>Working Professional</span>
                        </div>
                    </div>
                    {
                        selectedValue == 'wp' ? '' :
                            <div className="input-area-half">
                                <div className="input-legends">{(selectedValue == 'ug' || selectedValue == 'pg') ? 'Start Year' : selectedValue == 'wp' ? '' : ''}
                                </div>


                                <div className="select-area">
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openOne}
                                        onClose={handleCloseOne}
                                        onOpen={handleOpenOne}
                                        value={startYear}
                                        onChange={handleChangeStart}
                                    >
                                        {
                                            yearArr.map((count,index) => {
                                                return (
                                                    <MenuItem key={index} value={count}>
                                                        <em>{count}</em>
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </div>
                            </div>
                    }
                    <div className="input-area-half">
                        <div className="input-legends">{selectedValue == 'ug' || selectedValue == 'pg' ? 'End Year' : selectedValue == 'wp' ? 'Experience (yrs)' : ''}
                        </div>
                        {
                            selectedValue == 'ug' || selectedValue == 'pg' ?
                                <div className="select-area">
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openTwo}
                                        onClose={handleCloseTwo}
                                        onOpen={handleOpenTwo}
                                        value={endYear}
                                        onChange={handleChangeEnd}
                                    >
                                        {
                                            yearArr.map((count,index) => {
                                                return (
                                                    <MenuItem key={index} value={count}>
                                                        <em>{count}</em>
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </div> :
                                selectedValue == 'wp' ?
                                    <div className="select-area">
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            open={openOne}
                                            onClose={handleCloseOne}
                                            onOpen={handleOpenOne}
                                            value={exp}
                                            onChange={handleChangeExp}
                                        >
                                            {
                                                expArr.map((count) => {
                                                    return (
                                                        <MenuItem value={count}>
                                                            <em>{count}</em>
                                                        </MenuItem>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </div> : ''
                        }
                    </div>
                </form>
            </div >
        </>
    )

}

export default ScreenThree;
