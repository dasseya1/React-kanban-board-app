import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

export default class List extends Component {
    render() {
        var cards = this.props.cardsList.map((card, index) => {
            return <Card key={index} id={card.id}
                      title={card.title}
                      description={card.description}
                      tasks={card.tasks} />
        });
      return (
        <div className="list">
            <h1>{this.props.title}</h1>
                {cards}
        </div>
      );
    }
  }

  List.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object)
  };