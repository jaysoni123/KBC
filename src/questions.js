import React, { Component } from 'react'
import "./kbc.css"
import question_bank from "./question_bank"

export default class Questions extends Component {

    state = {
        currentQuestion: 4
    }


    // options = [0,1,2,3].map((value) => {
    //     return (<div className="col-6" key={value}>
    //                 <input type="radio" name="kbc_option" id={question_bank[this.state.currentQuestion].Options[value]} key={question_bank[this.state.currentQuestion].Options[value]} />
    //                 <label htmlFor={question_bank[this.state.currentQuestion].Options[value]} key={value} className="font-weight-bold mx-1">{question_bank[this.state.currentQuestion].Options[value]}</label>
    //             </div>)
    // });
    

    render() {

        const options = [0,1,2,3].map((value) => {
            return (<div className="col-6" key={value}>
                        <input type="radio" name="kbc_option" id={question_bank[this.state.currentQuestion].Options[value]} key={question_bank[this.state.currentQuestion].Options[value]} />
                        <label htmlFor={question_bank[this.state.currentQuestion].Options[value]} key={value} className="font-weight-bold mx-1">{question_bank[this.state.currentQuestion].Options[value]}</label>
                    </div>)
        });

        return (
            <div className="row justify-content-center my-4">
                <div className="col-1 py-5">
                    <button className="btn btn-success my-5" onClick={() => {
                          if(this.state.currentQuestion > 0) {
                            this.setState({
                                currentQuestion: this.state.currentQuestion - 1          
                            });
                            console.log(this.state.currentQuestion);
                         }
                    }}>previous</button>
                </div>
                <div className="col-6 border border-dark my-2">
                    <h4><span className="mx-1">Q.{this.state.currentQuestion + 1}</span>{question_bank[this.state.currentQuestion].Question}</h4>
                    <div className="row my-4">
                        {options}
                    </div>
                </div>
                <div className="col-1 py-5">
                    <button className="btn btn-success my-5" onClick={() => {
                        if(this.state.currentQuestion < 4 ) {
                            this.setState({currentQuestion: this.state.currentQuestion + 1});
                            console.log(this.state.currentQuestion);
                        }
                    }}>Next</button>
                </div>
            </div>
        )
    }
}
