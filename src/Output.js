import React from 'react';
import Footer from './Footer';


class Output extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            totalTip: ''       
        }
    }

    calTotal = () => {
        if(this.props.custDetails == 0) {
            alert("Please enter details")
        } else {
        const total = this.props.custDetails.reduce((sum, item) => {
            return sum + Number((item.feedback * this.props.totalAmount))
        }, 0)
        this.setState({totalTip: total})
        this.props.disableKey()
        }
    }
    
    render() {
        console.log(this.state)
        return(
            <div className= 'output'>
                <h4>Customer List</h4><hr/>
                {this.props.custDetails.length > 0 && <div className='custList'>
                    <ul>
                        {this.props.custDetails.map((item, index) => {
                            return <li key= {index}>
                                {`${item.name} offering a tip of ${item.feedback * this.props.totalAmount} rupee.`}
                            </li>
                        })}
                    </ul>
                </div>}
                <button class="btn btn-success" onClick= {() => this.calTotal()}>Calculate Tip &amp; Customer</button><br/><br/>
                {this.state.totalTip && <table className= 'table'>
                    <tbody>
                        <tr>
                            <th>Total Customer</th>
                            <th>Tip</th>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>{this.props.custDetails.length}</td>
                            <td>{this.state.totalTip}</td>
                        </tr>
                    </tfoot>
                </table>}
                <Footer />
            </div>
        )
    }
}

export default Output