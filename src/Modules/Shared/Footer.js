import React, { useEffect, useState, useContext } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import instagramIcon from '../../Assets/SVG/ig.svg';
import twitterIcon from '../../Assets/SVG/twitter.svg';
import linkedinIcon from '../../Assets/SVG/linkedin.svg';
import facebookIcon from '../../Assets/SVG/fb.svg';



import '../Shared/Footer.scss';

const Footer = () => {

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <h6 className="heading-1">OUTLEARN</h6>
              <p className="mt-4 text-justify font-s">
                OutLearn’s career ladder Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis amet tincidunt urna, leo penatibus enim. Amet ipsum quam
              </p>

              <div className="more-icons">
               <p>Email</p>

               <p>Whatsapp</p>

              </div>

              <ul className="social-icons">
                <li><a className="facebook" href="#">
                  <img src={instagramIcon} alt="" srcset="" />
                </a></li>

                <li><a className="facebook" href="#">
                  <img src={twitterIcon} alt="" srcset="" />
                </a></li>

                <li><a className="facebook" href="#">
                  <img src={linkedinIcon} alt="" srcset="" />
                </a></li>

                <li><a className="facebook" href="#">
                  <img src={facebookIcon} alt="" srcset="" />
                </a></li>

              </ul>
            </div>

            <div className="col-xs-6 col-md-4">
              <h6 className="heading-2">Quick Links</h6>
              <ul className="footer-links mt-4">
                <li><a href="http://scanfcode.com/category/c-language/">Home</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">About</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">Career Ladder</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Courses</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3 sign-wrap">
              <h6 className="heading-2 p-2 text-center">Sign up now!</h6>
              <div className="input-area mt-4">
                <Input placeholder="+91  |  Enter Mobile Number" />
                <Button variant="outlined" color="primary" className="cont-button">
                  Sign up
                </Button>
              </div>
              <div>

              </div>

            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              {/* <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                <a href="#">OUTLEARN</a>.
              </p> */}
              <ul className="text-center"><p> <span className="m-5">Privacy Policy | Terms and conditions</span></p></ul>
            </div>

            {/* <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>


    </>
  )
}

export default Footer;