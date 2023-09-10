import React from 'react';
import { MenuOutlined, BellOutlined, MessageOutlined } from "@ant-design/icons";

export default function Header() {
    return (
        <>
            <div>
                <div className="header-admin d-flex justify-content-between align-items-center">
                    <div>
                        <MenuOutlined style={{ fontSize: 20 }} />
                    </div>
                    <div className='d-flex gap-3'>
                        <BellOutlined style={{ fontSize: 20 }} />
                        <MessageOutlined style={{ fontSize: 20 }} />
                    </div>
                </div>
            </div>
        </>
    )
}
