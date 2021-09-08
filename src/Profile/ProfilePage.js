import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfilePage.css'

export default function Profile(props) {

    const [user, setUser] = useState()
    const [data, setData] = useState({ items: [], order_id: "", created_at: "", restaurant: {} })
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://indapi.kumba.io/webdev/assignment')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then(data => {
                console.log(data)
                setUser(data.user)
                setData({items:data.items, order_id:data.order_id, restaurant: data.restaurant, created_at: data.createdAt})
            })
            .catch(error => {
                console.error('Error fetching data: ', error)
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) return "Loading..."
    if (error) return "Error!"
    return (
        <div class="container">
            <div class="main-body">

                {/* <!-- Breadcrumb --> */}
                <nav aria-label="breadcrumb" class="main-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                    </ol>
                </nav>
                {/* <!-- /Breadcrumb --> */}

                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="User" class="rounded-circle" width="150" />
                                    <div class="mt-3">
                                        <h4>{user.name}</h4>
                                        <p class="text-secondary mb-1">{`ID: ${user.id}`}</p>
                                        <p class="text-muted font-size-sm">{user.about}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-3">
                            <button class="btn btn-primary" onClick={() => props.history.push({
                                pathname: '/order',
                                state: data
                            })
                            } >View Order Summary</button>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {user.name}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {user.phone}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {user.address}
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>

                        <div class="row gutters-sm">
                            <div class="col-sm-6 mb-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h6 class="d-flex align-items-center mb-3">Likes</h6>
                                        {user.likes.map(like => (
                                            <>
                                                <small>{like}</small>
                                                <div class="progress mb-3" style={{ height: 5 }}>
                                                    <div class="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </>
                                        ))}

                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 mb-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h6 class="d-flex align-items-center mb-3">Dislikes</h6>
                                        {user.dislikes.map(dislike => (
                                            <>
                                                <small>{dislike}</small>
                                                <div class="progress mb-3" style={{ height: 5 }}>
                                                    <div class="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </div>

    )

}