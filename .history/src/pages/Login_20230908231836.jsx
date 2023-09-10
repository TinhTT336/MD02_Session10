import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from "../components/base/button/Button";
import "./login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Login() {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user, [name]: value,
        })
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(act_register(user));
        navigate('/login');
    }
    return (
        <>
            <Navbar />
            <div style={{ minHeight: "100vh", marginTop: 50 }} className='d-flex justify-content-center align-item-center'>
                <form onSubmit={handleSubmit} className='form-container'>
                    <h3 className='form-heading text-center p-3'>FORM LOGIN</h3>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input onClick={handleChange} className='form-input' type="text" id="email" placeholder='Nhập email...' />
                    </div>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="password">Password</label>
                        <input onClick={handleChange} className='form-input' type="password" id="password" placeholder='Nhập mật khẩu...' />
                    </div>
                    <div className='mt-4'>
                        <Button size="100%" title='Login' type='primary' />
                    </div>
                    <div className='mt-3 d-flex justify-content-between'>
                        <Link to={"/"}>Quay lại trang chủ</Link>
                        <Link>Quên mật khẩu</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
