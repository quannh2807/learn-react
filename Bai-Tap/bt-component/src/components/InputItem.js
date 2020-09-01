import React, { Component } from "react";

class InputItem extends Component {
    render() {
        return (
            <div className="form-group">
                <label>{ this.props.label }</label>
                <input
                    type={this.props.type}
                    className="form-control"
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}

export default InputItem;
