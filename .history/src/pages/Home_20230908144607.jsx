import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from '../components/base/button/Button'

export default function Home() {
    return (
        <div>
            <Navbar />
            <section style={{ backgroundColor: "#eee" }}>
                <div className="text-center container py-5">
                    <h4 className="mt-4 mb-5">
                        <strong>HOME PAGE</strong>
                    </h4>
                </div>
            </section>
            <Button title={"Trang chu"} size={120} type={"primary"} />
            {/* <Button title={"Cap nhat"} size={120} /> */}
            <Footer />
        </div>
    )
}
