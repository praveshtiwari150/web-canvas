import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { productdata } from '../data';

const Products = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();

        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    return (
        <div>
            {isMobile ? (
                productdata.map(product => (
                    <div className="mobile-container">
                        <h2>{product.title}</h2>
                        <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" />
                        <div>
                        <p>{product.description}</p>
                            <p> <span className='hgl'>Main Highlight</span> - {product.highlight}</p>
                        </div>

                        <div>
                        <p>Rating: {product.feedback.rating}</p>
                        <div className='star'>
                            {
                                [...Array(product.feedback.star)].map((index) => (
                                    <FaStar key={index} />
                                ))
                            }
                            </div>
                        </div>
                        {product.feature && <p className='feature'>{product.feature}</p>}
                        <button>View</button>
                    </div>
                ))) : (productdata.map(product => (
                    <div key={product.id} className='desktop-container'>
                        <div className="list-left">
                            {product.feature && <div className='feature'>{product.feature}</div>}
                            <div className='img-div'>
                                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" />
                                <p>Builder 1</p>
                            </div>
                        </div>
                        <div className="list-center">
                            <span className='list-title'>{product.title} - <span className='list-description'>{product.description}</span></span>
                            <p className='list-highlight'>Main Highlights</p>
                            <span className='hgl-desc'>{product.highlight}</span>
                            <span className='show-more'>Show More</span>
                        </div>
                        <div className="list-right">
                            <div className='list-rating'>
                                <div className='nmr'>{product.feedback.rating}</div>
                                <div>{product.feedback.phrase}</div>
                                <div className='star'>
                                    {
                                        [...Array(product.feedback.star)].map((index) => (
                                            <FaStar key={index} />
                                        ))
                                    }
                                </div>
                            </div>
                            <button className='list-btn'>View</button>
                        </div>
                    </div>
                )))



            }
        </div>
    )
}

export default Products
