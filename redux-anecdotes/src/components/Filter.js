import React from 'react';
import {connect} from 'react-redux';
import {resetFilter, setFilter} from '../reducers/filterReducer.js';
import {resetFiltered, setFiltered} from '../reducers/anecdoteReducer.js';

const mapStateToProps = (state) => {
  return {
    filterState: state.filterState,
    anecdoteState: state.anecdoteState
  };
};

const mapDispatchToProps = {
  resetFilter, setFilter, resetFiltered, setFiltered
};

const Filter = (props) => {
  const anecdotes = props.anecdoteState.anecdotes;
  let filtered = [];
  const setFiltering = (event) => {
    event.preventDefault();
    const value = event.target.value;
    anecdotes.forEach(anecdote => {
      if (anecdote.content.includes(value)) {
        filtered = [...filtered, anecdote];
      }
    });
    props.setFilter(value);
    props.setFiltered(filtered);
  };
  const resetFiltering = (event) => {
    event.preventDefault();
    event.target.anecdoteFilter.value = '';
    props.resetFilter();
    props.resetFiltered();
  };

  return (
    <div>
      <form onChange={setFiltering} onSubmit={resetFiltering}>
        <input placeholder='filter anecdotes' style={{marginLeft: '1em', border: '1px solid forestgreen', backgroundColor: '#ede9e8'}}
          name='anecdoteFilter'/>
        <button style={{marginLeft: '0.5em', border: '1px solid orangered', backgroundColor: '#ede9e8'}}
          name='clearFilter' type='submit'>clear</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);