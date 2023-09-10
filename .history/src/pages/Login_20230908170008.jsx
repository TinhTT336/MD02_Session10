import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

export default function Login() {
    return (
        <div>
            <Navbar />
            <form className='form-container'>
                <div>
                    <label className='form-label' htmlFor="email">Email</label>
                    <input className='form-input' type="text" id="email" />
                </div>

            </form>
            <Footer />
        </div>
    )
}
