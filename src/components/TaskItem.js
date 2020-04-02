import React from 'react';

class TaskItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            className: this.props.done ? 'todoList__item--done' : 'todoList__item',
            done: this.props.done
        };
    }

    onChangeTaskName() {

        if (this.state.className == 'todoList__item') {
            this.setState( {
                className: 'todoList__item--done',
                done: true
            } )
            this.props.completeTask();
        }
        else {
            this.setState( {
                className: 'todoList__item',
                done: false
            } )
            this.props.resetTask();
        }

    }

    render() {
        return (
            <li key={this.props.ID} className={this.state.className} onClick={this.onChangeTaskName.bind(this)}>
                {this.props.task}
            </li>
        );
    }

}

export default TaskItem;