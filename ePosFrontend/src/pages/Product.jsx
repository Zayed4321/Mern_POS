import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Product = () => {

    const [product, setProduct] = useState([]);
    const [payment, setPayment] = useState();

    console.log(payment)

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/items/get-item");

            if (data?.success) {
                setProduct(data?.item)
            }

        } catch (error) {
            console.log("Error in catching the Products")
        }
    };



    useEffect(() => {
        getAllProducts();

    }, [])


    return (
        <div className='flex flex-wrap p-20 justify-center gap-10' >
            {
                product.map((c) => (
                    <div key={c._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='flex flex-row' >
                                <h2 className="card-title text-2xl">{c.name}</h2>
                                <div className="badge badge-primary mt-2 ml-2">{c.category}</div>
                            </div>
                            <p> <span className='text-lg font-semibold' > Price of Product : </span> {c.price}</p>
                            <p> <span className='text-lg font-semibold' > Quantity Ordered : </span> {c.quantity} </p>
                            <p> <span className='text-lg font-semibold' > Total Amount : </span> {c.quantity * c.price} </p>
                            <div className="card-actions justify-end">
                                <NavLink to={`/products/${c._id}`} >
                                    <button className="btn btn-primary"> Order Now</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-2">Please Select the Payment Method</h3>
                    <div className='mb-5' >
                        <select className="select select-bordered w-full max-w-xs" defaultValue={"Category"} onChange={(e) => setPayment(e.target.value)}>
                            <option >Select Payment Method</option>
                            <option>On Credit</option>
                            <option>Cash</option>
                            <option>Credit Card</option>
                        </select>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog> */}

            {/* {
                payment === "Credit Card" ? document.getElementById('my_modal_6').showModal() : sendInvoice()
            } */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='mb-5'>
                        <label className="input input-bordered flex items-center gap-2" >
                            <input type="text" placeholder='Give Password' />
                        </label>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={sendInvoice} >Close</button>
                        </form>
                    </div>
                </div>
            </dialog> */}
        </div>
    )
};



export default Product