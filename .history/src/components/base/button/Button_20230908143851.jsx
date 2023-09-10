import React from 'react';
import "./button.css";

export default function Button({ title, size }) {
    const style = {
        width: size,
    }
    return (
        <>
            <button style={style} className='t-button'>
                {title}
            </button>
        </>
    )
}
