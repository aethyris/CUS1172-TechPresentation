import React, { Component } from 'react';
import './question.css';

class IQuestion extends Component {
    constructor(props) {
        super(props);
        this.className='question';
    }
    render() {
        return <div className={this.className}>
            {this.props.children}
        </div>
    }
}

class IMultipleChoiceQuestion extends IQuestion{
    constructor(props) {
        super(props);
        this.className = this.className + ' mc-question'
    }
    render() {
        return (
            <div className={this.className}>
                <h3>Inheritance Question Title</h3>
                {this.props.children}
                <br/><br/>
                <input type="radio" value="opt1" name="example" /> Option 1
                <br/>
                <input type="radio" value="opt2" name="example" /> Option 2
                <br/>
                <input type="radio" value="opt3" name="example" /> Option 3
            </div>     
        )
    }
}

class ISolveQuestion extends IQuestion {
    constructor(props) {
        super(props);
        this.className = this.className + ' solve-question'
    }
    render() {
        return (
            <div className={this.className}>
                <h3>Inheritance Question Title</h3>
                {this.props.children}
                <br/><br/>
                <label>
                    Solution=
                    <input type="text" name="example"/>
                </label>
            </div>    
        ) 
    }
}

class Inheritance extends Component {
    render() {
        return <div>
            <IMultipleChoiceQuestion>Inheritance Question Details</IMultipleChoiceQuestion>
            <br/>
            <ISolveQuestion>Inheritance Question Details</ISolveQuestion>
        </div>
    }
}

export default Inheritance;