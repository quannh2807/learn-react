import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";
import tick from "./components/images/down-arrow.svg";

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: [
                { title: "Đi ăn hàng", isComplete: true },
                { title: "Đi tán gái", isComplete: false },
                { title: "Học bài", isComplete: true },
                { title: "Lếu lều", isComplete: false },
            ],
        };

        this.addItem = this.addItem.bind(this);
    }

    onItemClicked(item) {
        return (event) => {
            const isComplete = item.isComplete;
            const { todoItems } = this.state;
            const index = todoItems.indexOf(item);
            this.setState({
                todoItems: [
                    ...todoItems.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete,
                    },
                    ...todoItems.slice(index + 1),
                ],
            });
        };
    }

    addItem(event) {
        // event.keyCode = 13 la enter
        // event.target.value
        // debounce ngăn trigger liên tục
        let text = event.target.value;
        if (!text) { return }
        text = text.trim();
        if (!text) { return }

        if (event.keyCode == 13) {
            this.setState({
                todoItems: [
                    { title: text, isComplete: false },
                    ...this.state.todoItems
                ]
            });
            event.target.value = "";
        }
    }

    render() {
        return (
            <div className="App">
                <h3>Todo List</h3>
                <div className="App-body">
                    <div className="App-input">
                        <input placeholder="Nhập vào đây nào" onKeyUp={this.addItem}/>
                        <button></button>
                    </div>
                    {this.state.todoItems.length > 0 &&
                        this.state.todoItems.map((item, index) => (
                            <Todo
                                key={index}
                                item={item}
                                onClick={this.onItemClicked(item)}
                            />
                        ))}
                    {this.state.todoItems.length === 0 && "Nothing here."}
                </div>
            </div>
        );
    }
}
export default App;
