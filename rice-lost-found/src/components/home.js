import React, { Component } from 'react'
import ListingList from './listing/listing_list'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Rice Lost and Found!</h1>
                <p>Below, you'll see listings of missing items in the order of most recent. Click on the listing, and you'll be able to contact the person who reported it to schedule a time to retrieve it!</p> 
                <ListingList>
                </ListingList>
            </div>
        )
    }
}