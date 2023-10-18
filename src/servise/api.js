import axios from 'axios';

export const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/'
  );
  //   throw new Error('Ooohs! Some error...');
  return data;
};

export const findPostById = async postId => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return data;
};

export const findPostCommentsById = async postId => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return data;
};
