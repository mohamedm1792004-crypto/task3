import React, { useContext, useState } from 'react'
import AllCompo from '../components/AllCompo'
import Footer from '../components/Footer'
import { useCart } from '../Cart/CartContext'
import { apivalue } from '../Data/AllData'
import { Link } from 'react-router-dom'


function Page() {
    const { addToCart } = useCart();
    const data = useContext(apivalue)
    const [search, setsearch] = useState("all")

    const getValue = (value) => {
        setsearch(value)
    }

    return (
        <div className='section properties'>
            <div className='container'>

                <ul className="properties-filter">

                    <li>
                        <button
                            className={search === "all" ? "is_active" : ""}
                            onClick={() => getValue("all")}
                        >
                            All
                        </button>
                    </li>

                    <li>
                        <button
                            className={search === "beauty" ? "is_active" : ""}
                            onClick={() => getValue("beauty")}
                        >
                            Beauty
                        </button>
                    </li>

                    <li>
                        <button
                            className={search === "fragrances" ? "is_active" : ""}
                            onClick={() => getValue("fragrances")}
                        >
                            Fragrances
                        </button>
                    </li>

                    <li>
                        <button
                            className={search === "furniture" ? "is_active" : ""}
                            onClick={() => getValue("furniture")}
                        >
                            Furniture
                        </button>
                    </li>

                </ul>

                <div className="row properties-box">

                    {data.map((item) => {

                        console.log(item.category, search)

                        return search === "all" ? (

                            <div
                                className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv"
                                key={item.id}
                            >
                                <div className="item">

                                    <Link to={`/singleproduct/${item.id}`}>
                                        <img src={item.images[0]} alt="" />
                                    </Link>

                                    <span className="category">
                                        {item.category}
                                    </span>

                                    <h6>{item.price}</h6>

                                    <h4>
                                        <Link to={`/singleproduct/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </h4>

                                    <ul>
                                        <li>
                                            Brand: <span>{item.brand}</span>
                                        </li>

                                        <li>
                                            stock: <span>{item.stock}</span>
                                        </li>

                                        <li>
                                            id: <span>{item.id}</span>
                                        </li>
                                    </ul>

                                    <div className="main-button">
                                        <Link to={`/singleproduct/${item.id}`}>
                                            Details
                                        </Link>
                                        <button onClick={() => addToCart(item)}>add to cart</button>
                                    </div>

                                </div>
                            </div>

                        ) : item.category === search ? (

                            <div
                                className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv"
                                key={item.id}
                            >
                                <div className="item">

                                    <Link to={`/singleproduct/${item.id}`}>
                                        <img src={item.images[0]} alt="" />
                                    </Link>

                                    <span className="category">
                                        {item.category}
                                    </span>

                                    <h6>{item.price}</h6>

                                    <h4>
                                        <Link to={`/singleproduct/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </h4>

                                    <ul>
                                        <li>
                                            Brand: <span>{item.brand}</span>
                                        </li>

                                        <li>
                                            stock: <span>{item.stock}</span>
                                        </li>

                                        <li>
                                            id: <span>{item.id}</span>
                                        </li>
                                    </ul>

                                    <div className="main-button">
                                        <Link to={`/singleproduct/${item.id}`}>
                                            Details
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        ) : null

                    })}

                </div>

            </div>
        </div>
    )
}

function AllProducts() {
    return (
        <div>
            <AllCompo />
            <Page />
            <Footer />
        </div>
    )
}

export default AllProducts