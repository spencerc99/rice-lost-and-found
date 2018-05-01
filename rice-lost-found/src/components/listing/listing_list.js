import React, { Component } from 'react';
import axios from 'axios';
import Rx from 'rxjs';

const url = "http://localhost:9000/listings/"; // TOOO: pull url from a .env json

export default class ListingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: []
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
                this.setState({ listings: listings });
            });
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}