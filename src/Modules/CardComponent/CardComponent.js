import React from 'react';
import './CardComponent.scss';
import Img1 from '../../Assets/SVG/img1.svg';
import Img2 from '../../Assets/SVG/img2.svg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const CardComponent = () => {
    const specialization = ['Mobile Apps', 'Data Science', 'AI', 'Web development', 'Data Science', 'Mobile Apps']

    return (
        <div className='main-body'>
            <Card>
                <CardActions className='button-back'>
                    <div className='m-2'>
                        Back
                    </div>
                </CardActions>
                <CardContent className='card-content'>
                    <div style={{ margin: -16 }}>
                        <img src={Img2} alt='img 2' />
                    </div>
                    <div className='svg-img-wrapper'>
                        <img src={Img1} alt='img 1' />
                    </div>

                    <div className="margin-transform card-body-wrapper">
                        <p className="pl-4">Please tell us your interests to help us guide you better.</p>

                        <h4 className="pl-4"> Which <span>specialisation</span> are you most interested in? </h4>

                       <h5 className="pl-4 mb-4">You can select multiple options </h5>

                        <div className="common-btn-wrapper">
                            {specialization.map((x, i) =>
                                <Button variant="contained">{x}</Button>
                            )}
                        </div>

                        <div className="continue-btn-wrapper">
                            <Button variant="contained">Continue</Button>
                        </div>
                    </div>

                </CardContent>

            </Card>
        </div>
    );
}

export default CardComponent;