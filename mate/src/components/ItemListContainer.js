import React, { Component } from 'react';

class ItemListContainer extends Component {
    render() {
        return (
                <h3>
                    {this.props.greeting}
                </h3>
        )
    }
};

export default ItemListContainer;