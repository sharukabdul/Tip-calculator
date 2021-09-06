import React from 'react'
import Input from './Input'
import './css/Style.css'


class Header extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className= 'container'>
                <div className= 'header'>
                    <h2>Tip Calculator</h2>
                    <div>Build in React</div>
                </div>
                <Input />
            </div>
        )
    }
}

export default Header