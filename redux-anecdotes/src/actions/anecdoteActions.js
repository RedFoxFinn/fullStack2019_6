
export const voteAnecdote = (anecdoteId) => {
  return {
    type: 'UPVOTE',
    id: anecdoteId
  };
};

export const addAnecdote = (newAnecdote) => {
  return {
    type: 'ADD_NEW',
    anecdote: newAnecdote
  };
};

export const sortAnecdotes = () => {
  return {
    type: 'SORT'
  };
};