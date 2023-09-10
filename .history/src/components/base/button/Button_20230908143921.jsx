import React from 'react';
import "./button.css";

export default function Button({ title, size }) {
    const styleObj = {
        width: size,
    }
    return (
        <>
            <button style={styleObj} className='t-button'>
                {title}
            </button>
        </>
    )
}
