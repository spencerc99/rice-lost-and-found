import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    handleRef = (c) => {
        this.inputRef = c
    }

    focus = () => {
        this.inputRef.focus()
    }

    render() {
        return (
            <div class="search-bar">
                <Input size="large" ref={this.handleRef} icon='search' placeholder='Search...' value={this.state.term}
                onChange={event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}