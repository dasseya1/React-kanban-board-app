import React, { Component } from 'react';
  
export default class CheckList extends Component {
    render() {
      let tasks = this.props.tasks.map((task, index) => (
              <li key={index} className="checklist__task">
                  <input type="checkbox" defaultChecked={task.done} />
                  {task.name}
                  {/*eslint-disable-next-line*/}
                  <a href="#" className="checklist__task--remove" />
              </li>
            
          ));
      return (
          <div className="checklist">
              <ul>{tasks}</ul>
              <input type="text"
              className="checklist--add-task" 
              placeholder="Type then hit Enter to add a new task" />
          </div>
      )
    }
  }