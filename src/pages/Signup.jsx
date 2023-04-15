import React from 'react';
import logo from '../assets/images/gusd/logo.png'
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    useEffect(() => {
        document.body.style.overflow = "auto";
    }, [])
    return(
        <div className='home-3' style={{position: "relative"}}>
            <section id='signupWrapper'>
                <div className="signUpLogoWrapper">
                    <img src={logo} alt="" />
                    <h5>GUSD</h5>
                </div>
                <div className="signUpFormWrapper">
                    <h5 className="formTitle">Create your account on GUSD</h5>
                    <div className="row formRow">
                        <div className="col-6 formItem">
                            <h5 className='formLabel'>First Name</h5>
                            <input type="text" placeholder='First name' />
                        </div>
                        <div className="col-6 formItem">
                            <h5 className='formLabel'>Last Name</h5>
                            <input type="text" placeholder='Last name' />
                        </div>
                    </div>
                    <div className="row formRow">
                        <div className="col-6 formItem">
                            <h5 className='formLabel'>Email</h5>
                            <input type="email" placeholder='Email address' />
                        </div>
                        <div className="col-6 formItem">
                            <h5 className='formLabel'>Username</h5>
                            <input type="text" placeholder='Username' />
                        </div>
                    </div>
                    <div className="row formRow">
                        <div className="col-6 formItem">
                            <h5 className='formLabel'>Password</h5>
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className="col-6 formItem">
                            <h5 className='formLabel'>Password Confirmation</h5>
                            <input type="password" placeholder='Confirm password' />
                        </div>
                    </div>
                    <div className="row formRow">
                        <div className="col-12 formItem">
                            <h5 className='formLabel'>EVM Wallet</h5>
                            <input type="text" placeholder='EVM Wallet address' />
                        </div>
                    </div>
                    <div className="termsWrapper">
                        <input type="checkbox" />
                        <h5 className='termsLabel'>I’ve read and accepted the <span>terms & conditions</span> and the <span>privacy policy</span></h5>
                    </div>
                    <div className="btnWrapper">
                    <Button className="signupBtn">Sign up</Button>
                    </div>
                    <h5 className="signinLink">Already have an account? <Link to={'/signin'}><span>Sign in</span></Link></h5>

                </div>
            </section>
        </div>
    );
}

export default Signup;