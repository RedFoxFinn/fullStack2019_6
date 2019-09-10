import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (newAnecdote) => {
  const object = {
    content: newAnecdote,
    votes: 0
  };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const upvote = async (anecdote) => {
  let object = anecdote;
  object.votes = object.votes +1;
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, object);
  return response.data;
};

export default {
  getAll, createNew, upvote
};