import React from 'react';
import "./button.css";

export default function Button({ title, size }) {
    return (
        <>
            <button className='t-button'>
                {title}
            </button>
        </>
    )
}
