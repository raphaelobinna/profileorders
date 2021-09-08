import React, { useState, useEffect } from 'react';
import Food from '../assets/food.png'
import './Order.css'

export default function Order(props) {
    const [data, setData] = useState(props.location.state)

    return (

        <div class="container">
            <div class="container-fluid p-0">
                <h1 class="h3 mb-3">Order Summary</h1>
                <div class="row">
                    <div class="col-xl-8">
                        <div class="card">
                            <div class="card-header pb-0">
                                <h5 class="card-title mb-0">{`Order ID: ${data.order_id}`}</h5>
                            </div>
                            <div class="card-body">
                                <table class="table table-striped" style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>price</th>
                                            <th>currency</th>
                                            <th>tax_pct</th>
                                            <th>quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.items.map(item => (
                                            <>
                                                <tr>
                                                    <td><img src={Food} width="32" height="32" class="rounded-circle my-n1" alt="food" /></td>
                                                    <td>{item.name}</td>
                                                    <td>{item.category}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.currency}</td>
                                                    <td>{`${item.tax_pct}%`}</td>
                                                    <td>{item.quantity}</td>
                                                </tr>
                                            </>
                                        ))}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">

                                <h5 class="card-title mb-0">Restaurant</h5>
                            </div>
                            <div class="card-body">
                                <div class="row g-0">
                                    <div class="col-sm-3 col-xl-12 col-xxl-3 text-center">
                                        <img src={Food} width="64" height="64" class="rounded-circle mt-2" alt="food" />
                                    </div>
                                    <div class="col-sm-9 col-xl-12 col-xxl-9">
                                        <strong>{data.restaurant.name}</strong>
                                        <p>{`zip code: ${data.restaurant.zipcode}`}</p>
                                    </div>
                                </div>

                                <table class="table table-sm mt-2 mb-4">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{data.restaurant.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Street</th>
                                            <td>{data.restaurant.street}</td>
                                        </tr>
                                        <tr>
                                            <th>City</th>
                                            <td>{data.restaurant.city}</td>
                                        </tr>
                                        <tr>
                                            <th>State</th>
                                            <td>{data.restaurant.state}</td>
                                        </tr>
                                        <tr>
                                            <th>Date</th>
                                            <td>{`${new Date(data.created_at)}`}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )

}