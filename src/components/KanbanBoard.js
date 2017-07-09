import React, { Component } from 'react';
import List from './List';
  
export default class KanbanBoard extends Component {
    render() {
      return (
        <div className="app">
            <List id="todo" title="To Do" cardsList={
                this.props.cardsList.filter((card) => card.status=== "todo")
            } />
            <List id="todo" title="To Do" cardsList={
                this.props.cardsList.filter((card) => card.status=== "in-progress")
            } />
            <List id="todo" title="To Do" cardsList={
                this.props.cardsList.filter((card) => card.status=== "done")
            } />
        </div>
      );
    }
  }