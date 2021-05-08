import React, { Component } from 'react';

class Tab extends Component {
    render() {
        const activeTab = this.props.activeTab;
        const label = this.props.label;
        const onClick = () => this.props.setActiveTab(label);

        let className = 'tab-item';

        if (activeTab === label) {
            className += ' tab-item-active';
        }

        return (
            <li className={className} onClick={onClick}>{label}</li>
        );
    }
}

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    render() {
        const setActiveTab = (tab) => {
            this.setState({
                activeTab: tab
            });
        };
        const activeTab = this.state.activeTab;
        const children = this.props.children;

        return (
            <div>
                <ul className="tabs">
                    {children.map((child) => {
                        const { label } = child.props;
                        return (
                            <Tab activeTab={activeTab} label={label} setActiveTab={setActiveTab}/>
                        );
                    })}
                </ul>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;