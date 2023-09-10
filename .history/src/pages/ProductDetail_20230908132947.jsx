import React from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { formatMoney } from '../common/formatMoney'
import { act_add } from '../actions/cartActions'
import { notification } from 'antd'

export default function ProductDetail() {
    // cach 1:
    // const idProduct = useParams();
    // console.log(idProduct.id);
    const { id } = useParams();
    // console.log(typeof id);

    // lay danh sach san pham tu store ve
    const listProduct = useSelector(pro => pro.listProduct);

    // tim kiem thong tin product theo id
    const product = listProduct.find(p => p.product_id === +id);
    // console.log(product);
    const dispatch = useDispatch();
    // ham them san pha
    const handleAddToCart = (product) => {
        dispatch(act_add(product));
        notification.success({
            message: 'Thành công!',
            description: `${product.product_name} đã được thêm vào giỏ hàng`
        })
    }

    return (
        <>
            <Navbar />
            <>
                <h3 className="text-center p-5">Chi tiết sản phẩm</h3>
                <section style={{ backgroundColor: "#eee" }}>
                    <div className="container py-5">
                        <div className="row justify-content-center mb-3">
                            <div className="col-md-12 col-xl-10">
                                <div className="card shadow-0 border rounded-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                    <img
                                                        src={product.image}
                                                        className="w-100"
                                                    />
                                                    <a href="#!">
                                                        <div className="hover-overlay">
                                                            <div
                                                                className="mask"
                                                                style={{
                                                                    backgroundColor: "rgba(253, 253, 253, 0.15)"
                                                                }}
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-xl-6">
                                                <h4>{product.product_name}</h4>
                                                <h5 className="mb-2 t">Mô tả</h5>
                                                <p className=" mb-4 mb-md-0">
                                                    {product.description}
                                                </p>
                                            </div>
                                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                                <div className="d-flex flex-row align-items-center mb-1">
                                                    <h4 className="mb-1 me-1">{formatMoney(product.price)}</h4>
                                                </div>
                                                <div className="d-flex flex-column mt-4">
                                                    <button onClick={() => handleAddToCart(product)} className="btn btn-primary btn-sm" type="button">
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            <Footer />

        </>
    )
}
