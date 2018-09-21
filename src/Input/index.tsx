import * as React from 'react';

interface InputProps {
    value: string,
    onChange?: (value: string) => void;
}

class Input extends React.Component<InputProps, any> {

    constructor(props: any) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {

    }

    onInputChange(e: any) {
        const onChange = this.props.onChange;
        onChange && onChange(e.target.value);
    }

    render() {
        return (<input
            value={this.props.value}
            onChange={this.onInputChange}
        />);
    }
}

export default Input;
