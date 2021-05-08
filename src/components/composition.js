import React, { Component } from 'react';
import './question.css';

class Child extends Component {
    render() {
        return <p>Child name: {this.props.name}</p>
    }
}

class Parent extends Component {
    render() {
        return (
            <div>
                <h3>The parent component</h3>
                <Child name={'example'}/>
            </div>
        )
    }
}

class CQuestion extends Component {
    render() {
        return <div>
            <h3>Composition Question Title</h3>
            {this.props.children}
        </div>
    }
}

class CMultipleChoiceQuestion extends Component {
    render() {
        return (
            <div className='question mc-question'>
                <CQuestion>{this.props.children}</CQuestion>
                <br/>
                <input type="radio" value="opt1" name="example" /> Option 1
                <br/>
                <input type="radio" value="opt2" name="example" /> Option 2
                <br/>
                <input type="radio" value="opt3" name="example" /> Option 3
            </div>
        )
    }
}

class CSolveQuestion extends Component {
    render() {
        return (
            <div className={'question solve-question'}>
                <CQuestion>{this.props.children}</CQuestion>
                <br/>
                <label>
                    Solution=
                    <input type="text" name="example"/>
                </label>
            </div>
        )
    }
}

class Composition extends Component {
    render() {
        return (
            <div>
                <CMultipleChoiceQuestion>Composition Question Details</CMultipleChoiceQuestion>
                <br/>
                <CSolveQuestion>Composition Question Details</CSolveQuestion>
                <br/>
                <Parent/>
            </div>
        )
    }
}

export default Composition;