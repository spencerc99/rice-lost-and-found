import React, { Component } from 'react';
import axios from 'axios';
import Rx from 'rxjs';
import ListingListItem from './listing_list_item';
import SearchBar from './search-bar';

const url = "http://localhost:9000/listings/"; // TOOO: pull url from a .env json

const tempListings = [
    {
        id: 1,
        name: "towel",
        email: "spencerc99@gmail.com",
        itemImg: "https://upload.wikimedia.org/wikipedia/commons/5/57/Zusammengelegte_Handt%C3%BCcher.jpg",
        description: "its a towel",
        location: "Jones College",
        date: new Date(Date.now()),
        title: "White Towel"
    }
]

export default class ListingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: tempListings // TODO: change to []
        }
    }
    componentDidMount() {
        Rx.Observable.interval(30000).merge(Rx.Observable.of(0))
            .mergeMap(() => {
                return Rx.Observable.fromPromise(axios.get(url));
            })
            .map(result => {
                return result.data;
            })
            .subscribe(listings => {
                this.setState({ 
                    listings: listings,
                    filteredListings: listings 
                });
            });
    }

    searchMatch() {
        return true; // TODO: change later
    }

    getListings() {
        return this.state.filteredListings;
    }

    getListingList() {
        return this.getListings().map((listing) => {
            return <ListingListItem
                id={listing.id}
                name={listing.name}
                email={listing.email}
                itemImg={listing.itemImg}
                description={listing.description}
                location={listing.location}
                date={listing.date}
                title={listing.title} />
        })    
    }

    search() {
        this.setState({filteredListings: this.state.listings.filter((listing) => this.searchMatch(listing))})
    }

    render() {
        const listingItems = this.getListings().map((listing) => {
            return <ListingListItem
                id={listing.id}
                name={listing.name}
                email={listing.email}
                itemImg={listing.itemImg}
                description={listing.description}
                location={listing.location}
                date={listing.date}
                title={listing.title} />
        })    
        const search = _.debounce((term) => {
            this.search(term)
        }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={term => search(term)} />
                <br/>
                {this.getListingList()}
            </div>
        )
    }


}