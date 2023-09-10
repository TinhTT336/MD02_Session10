import React from 'react';
import "./button.css";

export default function Button({ title }) {
    return (
        <>
            <button className='t-button'>
                {title}
            </button>
        </>
    )
}
