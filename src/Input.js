import React from 'react'
import Output from './Output'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            custDetails: [],
            totalAmount: 0,
            name: '',
            feedback: '',
            disable: false,
            disable1: false
        }
    }

    disableKey = () => {
        this.setState({disable1: true})
    }

    handleAddCustomer = () => {
        if (this.state.totalAmount == 0) {
            alert("Please enter details")
        } else {
            this.setState({name: '', feedback: '', custDetails: [...this.state.custDetails, {name: this.state.name, feedback: this.state.feedback}],disable:true})
        }
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <div className= 'input'>
                    Enter your bill amount <br/><br/>
                    <input type= "number" id= "billAmount" placeholder={this.state.totalAmount} disabled = {(this.state.disable)? "disabled" : ""} onChange= {(e) => this.setState({totalAmount: e.target.value})}/><hr/>
                    How was the service &nbsp;&nbsp;
                    <select value= {this.state.feedback} name="" id="service" disabled = {(this.state.disable1)? "disabled" : ""} onChange= {(e) => this.setState({ feedback: e.target.value })}>
                        <option select= 'true' disabled dropzone="" value="">select</option>
                        <option value="0.2">Excellent-20%</option>
                        <option value="0.1">Moderate-10%</option>
                        <option value="0.05">Bad-5%</option>
                    </select>&nbsp;&nbsp;
                    <span>
                        <input type="text" placeholder= "Customer Name" value= {this.state.name} disabled = {(this.state.disable1)? "disabled" : ""} onChange= {(e) => this.setState({name: e.target.value})} />&nbsp;&nbsp;
                        <button value="button" id='primary' class="btn btn-primary" disabled = {(this.state.disable1)? "disabled" : ""} onClick= {() => this.handleAddCustomer()}>Add Customer</button>
                    </span>
                </div>
                <Output custDetails= {this.state.custDetails} totalAmount= {this.state.totalAmount}
                name= {this.state.name} feedback= {this.state.feedback} disableKey= {this.disableKey}/>
            </div>
        )
    }
}

export default Input