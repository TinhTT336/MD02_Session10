import React, { useEffect, useState } from 'react';
import './backtop.css';
import { UpOutlined } from '@ant-design/icons';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  useEffect(() => {
    // lang nghe su kien cuon chuot tu man hinh
    window.addEventListener("scroll", handleScroll)
  })

  return (
    <>
      {show && (<div className='back-top'>
        <UpOutlined />
      </div>)}
    </>
  )
}
