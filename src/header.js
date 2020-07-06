import React, { Component } from 'react'
import logo from "./kbc.png"

export default class Header extends Component {
    render() {
        return (
            <div className="row justify-content-center bg-primary">
                <div className="col-auto py-2">
                    <img src={logo} alt="logo" width="100px" />
                </div>
                <div className="col-auto py-3">
                    <h1 className="font-weight-bold title">Kon Banega karodpati</h1>
                </div>
            </div>
        )
    }
}
