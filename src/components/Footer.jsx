import React from 'react'
import { footerData } from '../data'

const Footer = () => {
    return (
        <footer>
            {footerData.map((items) => (
                <div key={items.id} className="footercontainer">
                        <div className="element-title">
                            {items.type}
                        </div>
                        <ul>
                            {items.services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    
                </div>
            ))}
        </footer>

    )
}

export default Footer
