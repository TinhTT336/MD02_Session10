import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from "../components/base/button/Button";
import "./login.css";

export default function Login() {
    return (
        <>
            <Navbar />
            <div style={{ minHeight: "100vh" }} className='d-flex justify-content-center align-item-center'>
                <form className='form-container'>
                    <h3 className='form-heading text-center p-3'>FORM LOGIN</h3>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input className='form-input' type="text" id="email" />
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="password">Password</label>
                        <input className='form-input' type="password" id="password" />
                    </div>
                    <Button title='Login' type='primary' />
                </form>
            </div>
            <Footer />
        </>
    )
}
