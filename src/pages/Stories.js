import React, { Component } from 'react'
import Header from 'parts/Header';

export default class Stories extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                Stories Here
            </>
        )
    }
}
