import React from 'react'
import './item.style.scss'
export default function Item({ id, name, imageUrl, price }) {
    return (
        <div className="item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="foot">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
            </div>

        </div>
    )
}
