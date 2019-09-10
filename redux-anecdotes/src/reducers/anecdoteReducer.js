import anecdotes from '../services/anecdotes.js';

const getId = () => (100000 * Math.random()).toFixed(0);
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

const initialState = {
  anecdotes: [],
  filteredAnecdotes: []
};

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state);
  console.log('action', action);
  switch (action.type) {
  case 'UPVOTE':
    return {...state, anecdotes: state.anecdotes.map(anecdote => {
      if (anecdote.id === action.id) {
        return {...anecdote, votes: anecdote.votes};
      } else {
        return anecdote;
      }
    })};
  case 'ADD_NEW':
    return {...state, anecdotes: [...state.anecdotes, action.anecdote]};
  case 'SORT':
    return {...state, anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes)};
  case 'SET_FILTERED':
    return {...state, filteredAnecdotes: action.anecdotes};
  case 'RESET_FILTERED':
    return {...state, filteredAnecdotes: []};
  case 'INIT_ANECDOTES':
    return {...state, anecdotes: action.anecdotes};
  default:
    return state;
  }
};

export const voteAnecdote = (anectode) => {
  return async dispatch => {
    const upvoted = await anecdotes.upvote(anectode);
    dispatch({
      type: 'UPVOTE',
      id: upvoted.id
    });
  };
};

export const addAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdotes.createNew(anecdote);
    dispatch({
      type: 'ADD_NEW',
      anecdote: newAnecdote
    });
  };
};

export const sortAnecdotes = () => {
  return {
    type: 'SORT'
  };
};

export const setFiltered = (anecdotes) => {
  return {
    type: 'SET_FILTERED',
    anecdotes: anecdotes
  };
};

export const resetFiltered = () => {
  return {
    type: 'RESET_FILTERED'
  };
};

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotesToSet = await anecdotes.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      anecdotes: anecdotesToSet,
    });
  };
};

export default anecdoteReducer;