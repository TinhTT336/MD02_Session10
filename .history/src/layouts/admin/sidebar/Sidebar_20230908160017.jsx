import React from 'react'
import "./sidebar.css";
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
    return (
        <>
            <div className='h-100 bg-black sidebar-admin'>
                <div>
                    <NavLink>
                        <div></div>
                        <div>Tổng quan</div>
                    </NavLink>
                    <NavLink>
                        <div></div>
                        <div>Quản lý sản phẩm</div>
                    </NavLink>
                    <NavLink>
                        <div></div>
                        <div>Quản lý người dùng</div>
                    </NavLink>
                </div>
            </div>

        </>
    )
}
