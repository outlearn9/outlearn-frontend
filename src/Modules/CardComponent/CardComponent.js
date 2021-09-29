import React, { useState } from 'react';
import './CardComponent.css';
import Img2 from '../../Assets/SVG/img2.svg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ScreenOne from '../Screens/ScreenOne';
import ScreenTwo from '../Screens/ScreenTwo';
import ScreenThree from '../Screens/ScreenThree'


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

    const [pageNo, setPageNo] = useState(1);

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

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
            default:
                return <ScreenOne />;

        }
    }
    return (
        <div className='main-body'>
            <Card className={classes.root}>
                <div className='top-buttons'>
                    <CardActions className='button-back'>
                        <Button size="small" onClick={() => pageNo > 1 ? setPageNo(pageNo - 1) : ''}>Back</Button>
                    </CardActions>
                    {pageNo > 1 ? <CardActions className='button-skip'>
                        <Button size="small">Skip</Button>
                    </CardActions> : ''}

                </div>
                <CardContent className='card-content'>
                    <div style={{ margin: -16 }}>
                        <img src={Img2} alt='img 2' />
                    </div>
                    <div className='body-component'>
                        {
                            getPage()
                        }
                    </div>
                    <div className='bottom-buttons'>

                        <Button variant="contained" color="primary" className="cont-button" onClick={() => pageNo < 3 ? setPageNo(pageNo + 1) : ''}>
                            Continue
                        </Button>
                        <div className='pagination-block'>
                            <span>{pageNo}/3</span>
                        </div>
                    </div>


                </CardContent>

            </Card>
        </div>
    );
}

export default CardComponent;