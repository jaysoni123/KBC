import React, { Component } from 'react'
import Header from "./header"
import Footer from './footer'
import Quesitons from "./questions"
import "./bootstrap.min.css"
import "./kbc.css"

export default class KBC extends Component {
    render() {
        return (
            <div>
                <Header />
                <Quesitons />
                <Footer />   
            </div>
        )
    }
}
