import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import Filter from './components/Filter';
import {initAnecdotes} from './reducers/anecdoteReducer.js';

const App = (props) => {
  useEffect(() => {
    props.initAnecdotes();
  }, []);
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter/>
      <AnecdoteForm/>
      <AnecdoteList/>
    </div>
  );
};

export default connect(null, {initAnecdotes})(App);