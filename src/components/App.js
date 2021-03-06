import React, { Component } from 'react';
import '../css/App.css';
import KanbanBoard from './KanbanBoard';

const cardsList = [
    {
      id: 1,
      title: "Read the Book",
      description: "I should read the whole book",
      status: "in-progress",
      tasks: []
    },
    {
      id: 2,
      title: "Write some code",
      description: "Code along with the samples in the book at [github](https://github.com/dasseya1)",
      status: "todo",
      tasks: [
        {
          id: 1,
          name: "ContactList example",
          done: true
        },
        {
          id: 2,
          name: "Kanban example",
          done: false
        },
        {
          id: 3,
          name: "My own experiments",
          done: false
        }
      ]
    },
  ];
  
  export default class App extends Component {
    constructor(){
      super();
      this.state = {
        cardsList
      }
    }

    render() {
      return (
        <div>
          <KanbanBoard cardsList={this.state.cardsList} />
        </div>
      );
    }
  }
  

