import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouter() {
    const isLogin = false; //da dang nhap
    return isLogin ? <Outlet /> : (<Navigate to={"/login"} />)
}
