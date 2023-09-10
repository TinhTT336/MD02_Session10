import React from 'react'

export default function Header() {
    return (
        <>
            <div>
                <div className="header-admin d-flex justify-content-between align-items-center">
                    <div>
                        <MenuOutlined style={{ fontSize: 20 }} />
                    </div>
                    <div>
                        <BellOutlined style={{ fontSize: 20 }} />
                        <MessageOutlined style={{ fontSize: 20 }} />
                    </div>
                </div>
            </div>
        </>
    )
}
