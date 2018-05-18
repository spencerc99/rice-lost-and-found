import React, { Component } from 'react';
import {
    Segment,
} from 'semantic-ui-react'
import ListingItemPage from './listing_item_page'
import {
    Link,
    Route,
    Redirect,
} from 'react-router-dom'

import {
    Item,
} from 'semantic-ui-react'


const ListingListItem = ({id, name, email, itemImg, description, location, date, title}) => {
    return (
        <div>
            <Link to={`/item/${id}`}>
                <Segment>
                    <Item.Group>
                    <Item>
                        <Item.Image size='small' src={itemImg} />

                        <Item.Content>
                            <Item.Header as='a'>{title}</Item.Header>
                            <Item.Meta>{`${location} | ${date.toDateString()}`}</Item.Meta>
                            <Item.Description>
                                hi
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    </Item.Group>
                </Segment>
            </Link>

            <Route path="/item/:itemId" render={() => {
                return (
                    <ListingItemPage 
                        id={id}
                        name={name}
                        email={email}
                        itemImg={itemImg}
                        description={description}
                        location={location}
                        date={date}
                        title={title}/>
                )
            }}/>
        </div>

    )
}

export default ListingListItem;