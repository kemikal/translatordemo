import React, { Component } from 'react';

class GetText extends Component {

    state = {
        text: "",
    }

    onChange = (event) => {
        this.setState({text: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.getUserText(this.state.text, this.props.lang);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                   {this.props.lang} | <input type="text" value={this.state.text} onChange={this.onChange}/>
                    <button type="submit">Spara</button>
                </form>
            </div>
        );
    }
}

export default GetText;