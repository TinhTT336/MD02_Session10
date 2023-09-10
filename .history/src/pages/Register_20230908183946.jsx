import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from "../components/base/button/Button";
import { Link } from 'react-router-dom';
import { act_register } from '../actions/userAction';
// import { v4 as uuid } from "uuid";


export default function Register() {
    const [user, setUser] = useState({
        // user_id: uuid(),
        userName: "",
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user, [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(user);
        dispatch(act_register());
    }

    return (
        <div>
            <Navbar />
            <div style={{ minHeight: "100vh", marginTop: 50 }} className='d-flex justify-content-center align-item-center'>
                <form onSubmit={handleSubmit} className='form-container'>
                    <h3 className='form-heading text-center p-3'>FORM REGITER</h3>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="userName">UserName</label>
                        <input onChange={handleChange} className='form-input' type="text" name='userName' id="userName" placeholder='Nhập userName...' />
                    </div>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input onChange={handleChange} className='form-input' type="text" name='email' id="email" placeholder='Nhập email...' />
                    </div>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="password">Password</label>
                        <input onChange={handleChange} className='form-input' type="password" name='password' id="password" placeholder='Nhập mật khẩu...' />
                    </div>
                    <div className='mt-4'>
                        <Button size="100%" title='Register' type='primary' />
                    </div>
                    <div className='mt-3 d-flex justify-content-between'>
                        <Link to={"/"}>Quay lại trang chủ</Link>
                        <Link>Đăng nhập</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
