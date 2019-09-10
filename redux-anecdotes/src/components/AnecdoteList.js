import React from 'react';
import {connect} from 'react-redux';
import {sortAnecdotes, voteAnecdote} from '../reducers/anecdoteReducer.js';
import {notify} from '../reducers/notificationReducer';

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdoteState.anecdotes,
    filteredAnecdotes: state.anecdoteState.filteredAnecdotes,
    filterState: state.filterState
  };
};

const mapDispatchToProps = {
  sortAnecdotes, voteAnecdote, notify
};

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote);
    props.notify(`Voted: ${anecdote.content}`, 2);
    props.sortAnecdotes();
  };
  const plain = () => {
    return (
      <div style={{marginTop: '1em'}}>
        {props.anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div style={{marginLeft: '1em'}}>
              has {anecdote.votes}
              <button style={{
                marginLeft: '1em', border: '1px solid orangered', backgroundColor: '#ede9e8'
              }} onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  const filtered = () => {
    return (
      <div>
        {props.filteredAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div style={{marginLeft: '1em'}}>
              has {anecdote.votes}
              <button style={{
                marginLeft: '1em', border: '1px solid orangered', backgroundColor: '#ede9e8'
              }} onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div>
      {props.filterState.state ? filtered() : plain()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);