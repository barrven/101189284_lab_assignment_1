import React, {Component } from "react";

export default class ConfirmModal extends Component {

    render() {
        if(this.props.show){
            return (
                <div>{this.props.children}</div>
            )
        }

        return null;
    }
}
