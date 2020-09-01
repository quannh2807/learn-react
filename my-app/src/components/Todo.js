import React, { Component } from "react";
import "./Todo.css";
const classNames = require("classnames");

class Todo extends Component {
    render() {
        const { item, onClick } = this.props;
        /* Cach 1: su dung if
		- Đặt class
		- kiếm tra điều kiện tồn tại

		let className = "TodoItem";
		if (item.isComplete) {
			className += " TodoItem-complete";
		}
		*/
        /* Cach 2: su dung classnames: https://www.npmjs.com/package/classnames
		let className = classNames({
		 	TodoItem: true,
		 	"TodoItem-complete": item.isComplete
		});
		*/

        let className = classNames(
            "Todo",
            this.props.className,
            { "Todo-complete": item.isComplete }
        );

        let btnCheck = classNames(
            "btn-check",
            "check",
            { "checked": item.isComplete }
        )

        return (
            <div
                className={className}
            >
                <p>{this.props.item.title}</p>
                <button
                    onClick={onClick}
                    className={btnCheck}
                >
                </button>
            </div>
        );
    }
}

export default Todo;
