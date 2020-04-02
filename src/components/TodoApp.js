import React from 'react';
import TaskItem from './TaskItem.js';

class TodoApp extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
            tasksDone: 0,
            allTasks: 0
        };
    }

    addTaskItem() {
        let elem = document.getElementById('todoApp__input');
        if (elem.value == '') {
            alert('Input something, asshole');
            return;
        }
        else {
            const newItem = {
                task: elem.value,
                done: false
            }
            this.setState( {
                items: this.state.items.concat(newItem),
                allTasks: this.state.allTasks += 1
            } );
            elem.value = '';
        }
        console.log(this.state);
    }

    completeTask() {
        this.setState( {
            tasksDone: this.state.tasksDone += 1
        } );
        console.log(this.state.tasksDone);
    }

    resetTask() {
        if (this.state.tasksDone == 0) {
            return;
        }
        this.setState( {
            tasksDone: this.state.tasksDone -= 1
        } )
        console.log(this.state.tasksDone);
    }

    render() {
        return(
            <div className="todoApp">
                <h1 className="todoApp__title">my todos</h1>
                <div className="todoApp__input">
                    <input id="todoApp__input" type="text" placeholder="what needs to be done?"></input>
                    <button onClick={this.addTaskItem.bind(this)}>Add Task</button>
                </div>
                <ul className="todoList">
                    {this.state.items.map((item, index) => (
                        <TaskItem
                            ID={index}
                            task={item.task}
                            done={item.done}
                            completeTask={this.completeTask.bind(this)}
                            resetTask={this.resetTask.bind(this)}
                        />
                    ))}
                </ul>
                <div className="todoApp_status">
                    <span>ALL TASKS: {this.state.allTasks}</span>
                    <span>COMPLETED: {this.state.tasksDone}</span>
                </div>
            </div>
        );
    }

}

export default TodoApp;