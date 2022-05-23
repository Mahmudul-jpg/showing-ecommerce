import React from 'react'
import shopData from './shop.data'
import Collection from '../../components/collection/collection.component'

export default class Shop extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            collection: shopData

        }
    }



    render() {
        const { collection } = this.state
        return (
            <div className="shop-page">
                {
                    collection.map(({ id, ...otherCollection }) => {
                        return (
                            <Collection key={id} {...otherCollection} />
                        )
                    })
                }
            </div>
        )
    }
}
