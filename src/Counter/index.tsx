import * as React from 'react';

class Counter extends React.Component<any, any> {

    constructor(props: object) {
        super(props);

        this.state = {
            count: 0,
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (<div>
            <span>{this.state.count}</span>
            <button onClick={this.onButtonClick}>Increment</button>
        </div>);
    }

}

export default Counter;
