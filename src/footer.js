import React, { Component } from 'react'
import Smily from "./footer_smily"

export default class Footer extends Component {
    render() {
        return (
            <div className="row footer bg-secondary py-2">
                <Smily />
                <Smily />
                <Smily />
                <Smily />    
                <div className="col-4 text-center py-2">
                    <h1 className="text-danger">Best of Luck</h1>
                </div>
                <Smily />
                <Smily />
                <Smily />
                <Smily />
            </div>
        )
    }
}
