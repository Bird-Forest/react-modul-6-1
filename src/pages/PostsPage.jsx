import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../servise/api';
import PostList from '../components/PostList';
import ErrorMessage from '../components/Error';
import Loader from '../components/Loader';

export default function PostsPage() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        setIsLoading(true);
        const postsData = await fetchPosts();

        setPosts(postsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <PostList posts={posts} />
    </div>
  );
}
