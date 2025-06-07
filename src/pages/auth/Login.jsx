import React from 'react'
import { useForm } from 'react-hook-form';
import loginScreenImage from '../../assets/images/loginScreen.svg';
import userIcon from '../../assets/images/icon/userIcon.svg';
import lock from '../../assets/images/icon/lock.svg';
import logo from '../../assets/images/awardimg.png'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log("Login Data:", data);
    };
    return (
        <div className='sectionPadding'>
            <div className="card d-flex align-items-center flex-row flex-md-column loginCard">
                <div className="left py-md-5">
                    <div className='innerCard'>
                        <img src={logo} alt="" srcset="" />
                        <h5>LOGIN</h5>
                        <div className='formBox'>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group controlId="username" className="mb-3 position-relative groupBox">
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        {...register("username", { required: "Username is required" })}
                                        isInvalid={!!errors.username}
                                    />
                                    <img className='loginIcon' src={userIcon} alt="" srcset="" />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="password" className="mb-3 position-relative groupBox">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        {...register("password", { required: "Password is required" })}
                                        isInvalid={!!errors.password}
                                    />
                                    <img className='loginIcon' src={lock} alt="" srcset="" />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className='d-flex align-items-center justify-content-center'>
                                        <Button variant="primary" type="submit" className="w-100">
                                    Login
                                </Button>
                                </div>
                            </Form>
                            <div className='bottomBox'>
                                <p>Don't have an account? <Link>Sign Up</Link></p>
                                <Link>Forget your password ?</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={loginScreenImage} className='img-fluid' alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Login