import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from "../components/base/button/Button";
import { Link } from 'react-router-dom';
import Password from 'antd/es/input/Password';


export default function Register() {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
    }

    return (
        <div>
            <Navbar />
            <div style={{ minHeight: "100vh", marginTop: 100 }} className='d-flex justify-content-center align-item-center'>
                <form className='form-container'>
                    <h3 className='form-heading text-center p-3'>FORM REGITER</h3>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="username">UserName</label>
                        <input className='form-input' type="text" name='username' id="username" placeholder='Nhập userName...' />
                    </div>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input className='form-input' type="text" name='email' id="email" placeholder='Nhập email...' />
                    </div>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="password">Password</label>
                        <input className='form-input' type="password" name='password' id="password" placeholder='Nhập mật khẩu...' />
                    </div>
                    <div className='mt-4'>
                        <Button size="100%" title='Register' type='primary' />
                    </div>
                    <div className='mt-3 d-flex justify-content-between'>
                        <Link to={"/"}>Quay lại trang chủ</Link>
                        <Link>Quên mật khẩu</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
