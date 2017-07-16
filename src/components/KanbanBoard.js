import React, { Component } from 'react';
import List from './List';
import PropTypes from './prop-types';
  
export default class KanbanBoard extends Component {
    render() {
      return (
        <div className="app">
            <List id="todo" title="To Do" cardsList={
                this.props.cardsList.filter((card) => card.status=== "todo")
            } />
            <List id="in-progress" title="In Progress" cardsList={
                this.props.cardsList.filter((card) => card.status=== "in-progress")
            } />
            <List id="done" title="Done" cardsList={
                this.props.cardsList.filter((card) => card.status=== "done")
            } />
        </div>
      );
    }
  }

  KanbanBoard.propTypes = {
      cards: PropTypes.arrayOf(PropTypes.object)
  };