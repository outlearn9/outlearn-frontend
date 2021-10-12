import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: '#5F22E0',
        borderRadius: 0,
        display: 'flex',
        padding: '0px 5vw;',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
}));


const Header = () => {


    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div className='app-name'>Outlearn</div>

                        {/* <div className='search-container'>
                            <span>
                                O
                            </span>
                            <input />
                        </div> */}

                        <div className="right-nav-wrap">
                        <div className='user-name'>
                            <span>A</span>
                            
                        </div>
                            <p className="logout-btn">Logout</p>
                        </div>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    )


}

export default Header;