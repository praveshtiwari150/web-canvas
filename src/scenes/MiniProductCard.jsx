import React from 'react'
import { miniCardData } from '../data';

/*
 "id": 1,
        "img-url": "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        "discount": "20% of",
        "time": "Limited time",
        "name": "Webbuilder 1",
        "description": "Computer Modern classic with wix support",
        "price": "$39.96",
        "original-price": "$49.96"
*/
const MiniProductCard = () => {
    return (
        <div className='mini-card'>
            {
                miniCardData.map(product => (
                    <div key={product.id} className='miniCard-container'>
                        <div>
                            <img src={product.imgUrl} alt="" />
                        </div>

                        <div className='discount-banner'>
                            <div className="discount">{product.discount}</div>
                            <div className="time">{product.time}</div>
                        </div>
                        <div className="name">{product.name}</div>
                        <div className="description">{product.description}</div>
                        <div className='priceInfo'>
                            <div className="price">{product.price}</div>
                            <div className="originalprice">{product.originalPrice}</div>
                            <div className="price-discount">{`(${product.discount})`}</div>
                        </div>
                        <button>Buy</button>
                    </div>
                ))
            }
        </div>
    )
}

export default MiniProductCard
