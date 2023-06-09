import React from 'react';
import { useEffect } from 'react';
import logo from '../assets/images/gusd/logo.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signin = () => {
    useEffect(() => {
        document.body.style.overflow = "auto";
    }, [])
    return(
        <div className='home-3' style={{position: "relative"}}>
            <section id='signupWrapper' className='signInPage' style={{height: "100vh"}}>
                <div className="signUpLogoWrapper" onClick={()=>{window.location.href = "/"}} style={{marginBottom: "5vh"}}>
                    <img src={logo} alt="" />
                    <h5>GUSD</h5>
                </div>
                <div className="signUpFormWrapper">
                    <h5 className="formTitle">Login to your GUSD account</h5>
                    <div className="row formRow">
                        <div className="col-12 formItem">
                            <h5 className='formLabel'>Email or Username</h5>
                            <input type="text" placeholder='First name' />
                        </div>
                    </div>
                    <div className="row formRow">
                        <div className="col-12 formItem">
                            <h5 className='formLabel'>Password</h5>
                            <input type="password" placeholder='Email address' />
                        </div>
                        
                    </div>
                    <div className="termsWrapper">
                        <h5 className='termsLabel'><span>Forgot password ?</span></h5>
                    </div>
                    <div className="btnWrapper">
                    <Link to={"/profile"} style={{width: "100%", marginLeft: "auto", marginRight: "auto", display: "flex"}}><Button className="signupBtn">Sign in</Button></Link>
                    </div>
                    <h5 className="signinLink">You don't have an account? <Link to={'/signup'}><span>Sign up</span></Link></h5>

                </div>
            </section>
        </div>
    );
}

export default Signin;