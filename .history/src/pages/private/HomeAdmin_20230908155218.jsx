import React from 'react'
import Sidebar from '../../layouts/admin/sidebar/Sidebar'
import Header from '../../layouts/admin/Header'

export default function HomeAdmin() {
    return (
        <>
            <div className='d-flex'>
                <Sidebar />
                <Header />
                <h1>Home Admin</h1>

            </div>
        </>
    )
}
