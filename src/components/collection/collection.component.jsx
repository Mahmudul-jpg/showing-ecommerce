import React from 'react'
import './collection.style.scss'
import Item from '../items/item.component'

export default function Collection({ title, items }) {
    return (
        <div className="collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, index) => { return (index < 4) }).map(({ id, ...otherItemProps }) => { return (<Item key={id} {...otherItemProps} />) })}
            </div>
        </div>
    )
}


