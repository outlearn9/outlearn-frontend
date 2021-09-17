import React from 'react';
import './CardComponent.css';
import Img1 from '../../Assets/SVG/img1.svg';
import Img2 from '../../Assets/SVG/img2.svg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CardComponent = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className='main-body'>
            <Card className={classes.root}>
            <CardActions className='button-back'>
                    <Button size="small">Back</Button>
                </CardActions>
                <CardContent className='card-content'>
                    <div style={{ margin: -16 }}>
                        <img src={Img2} alt='img 2' />
                    </div>
                    <div className='img1'>
                        <img src={Img1} alt='img 1' />
                    </div>

                </CardContent>
                
            </Card>
        </div>
    );
}

export default CardComponent;