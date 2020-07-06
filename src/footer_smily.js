import React, { Component } from 'react'
import goodluck from "./good_luck.gif"

export default class Smily extends Component {
    render() {
        return (
            <div className="col-1">
                <img src={goodluck} alt="Best of luck" width="80px" />
            </div>
        )
    }
}
