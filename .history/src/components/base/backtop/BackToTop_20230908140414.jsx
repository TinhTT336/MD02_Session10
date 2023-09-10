import React, { useState } from 'react';
import './backtop.css';
import { UpOutlined } from '@ant-design/icons';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? (<div className='back-top'>
        <UpOutlined />
      </div>) : <></>}
    </>
  )
}
