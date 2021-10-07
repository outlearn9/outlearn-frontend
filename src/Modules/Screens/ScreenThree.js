import React, { useEffect, useState } from 'react';
import './ScreenThree.css';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';



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
    const [selectedValue, setSelectedValue] = useState('ug');
    const [age, setAge] = useState('');
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const classes = useStyles();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleChangee = (event) => {
        setAge(event.target.value);
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
                        <Input placeholder="Type" inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className="input-area">
                        <div className="input-legends">Mobile<span>*You will recieve a verification code</span>
                        </div>
                        <Input placeholder="+91 | Mobile Number" inputProps={{ 'aria-label': 'description' }} />
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
                                checked={selectedValue === 'wp'}
                                onChange={handleChange}
                                value="wp"
                                name="radio-button-demo"
                                // inputProps={{ 'aria-label': 'B' }}
                                color="primary"
                            /><span>Working Professional</span>
                            <Radio
                                checked={selectedValue === 'pg'}
                                onChange={handleChange}
                                value="pg"
                                name="radio-button-demo"
                                // inputProps={{ 'aria-label': 'C' }}
                                color="primary"
                            /><span>PG Student</span>
                        </div>
                    </div>
                    {
                        selectedValue == 'wp' ? '' :
                            <div className="input-area-half">
                                <div className="input-legends">{(selectedValue == 'ug' || selectedValue == 'pg') ? 'Start Year' : selectedValue == 'wp' ? '' : ''}
                                </div>



                                <div className="select-area">
                                    {(selectedValue == 'ug' || selectedValue == 'pg') ? <TextField
                                        id="start-year"
                                        label=""
                                        type="year"
                                        defaultValue="1990"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    /> : <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openOne}
                                        onClose={handleCloseOne}
                                        onOpen={handleOpenOne}
                                        value={age}
                                        onChange={handleChangee}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {/* <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem> */}
                                    </Select>}

                                </div>
                            </div>
                    }
                    <div className="input-area-half">
                        <div className="input-legends">{selectedValue == 'ug' || selectedValue == 'pg' ? 'End Year' : selectedValue == 'wp' ? 'Experience (yrs)' : ''}
                        </div>
                        <div className="select-area">
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={openTwo}
                                onClose={handleCloseTwo}
                                onOpen={handleOpenTwo}
                                value={age}
                                onChange={handleChangee}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {/* <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem> */}
                            </Select>
                        </div>
                    </div>
                </form>

            </div >
        </>
    )

}

export default ScreenThree;
