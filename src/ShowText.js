import React, { Component } from 'react';

class ShowText extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

export default ShowText;