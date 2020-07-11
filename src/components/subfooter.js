import React from 'react'

export default function Subfooter() {
    return (
        <div>
            <h3 className="text-center">To know more about products or order...
                <a href="/contact" className="somelinks">Contact Us!</a>
            </h3>
            <h6 className="text-center">More about
                <a href="/about" className="somelinks">{' '}SANS FABRIC</a>
            </h6>
        </div>
    )
}
