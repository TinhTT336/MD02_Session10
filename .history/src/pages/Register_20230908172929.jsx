import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

export default function Register() {
    return (
        <div>
            <Navbar />
            <div style={{ minHeight: "100vh", marginTop: 100 }} className='d-flex justify-content-center align-item-center'>
                <form className='form-container'>
                    <h3 className='form-heading text-center p-3'>FORM REGITER</h3>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="username">UserName</label>
                        <input className='form-input' type="text" id="username" placeholder='Nhập userName...' />
                    </div>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input className='form-input' type="text" id="email" placeholder='Nhập email...' />
                    </div>
                    <div className='form-group mt-4'>
                        <label className='form-label' htmlFor="password">Password</label>
                        <input className='form-input' type="password" id="password" placeholder='Nhập mật khẩu...' />
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
