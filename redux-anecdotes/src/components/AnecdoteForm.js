import React from 'react';
import {connect} from 'react-redux';
import {addAnecdote, sortAnecdotes} from '../reducers/anecdoteReducer.js';
import {notify} from '../reducers/notificationReducer.js';

const mapStateToProps = (state) => {
  return {
    notificationState: state.notificationState,
    anecdoteState: state.anecdoteState
  };
};

const mapDispatchToProps = {
  addAnecdote, sortAnecdotes, notify
};

const AnecdoteForm = (props) => {
  const addNew = (event) => {
    event.preventDefault();
    const value = event.target.anecdoteField.value;
    props.addAnecdote(value);
    props.notify(`Added: ${value}`, 2);
    event.target.anecdoteField.value = '';
    props.sortAnecdotes();
  };
  return (
    <div>
      <form onSubmit={addNew} style={{marginTop: '1.5em', marginBottom: '1.5em'}}>
        <input placeholder='write new anecdote' style={{marginLeft: '1em', border: '1px solid forestgreen', backgroundColor: '#ede9e8'}}
          name='anecdoteField'/>
        <button type='submit'
          style={{marginLeft: '0.5em', border: '1px solid forestgreen', backgroundColor: '#ede9e8'}}>
          create
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm);