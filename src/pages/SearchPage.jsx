import React, { useEffect, useState } from 'react';
import { ReactComponent as IconSearch } from '../components/search.svg';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { findPostById } from 'servise/api';
import Loader from 'components/Loader';
import ErrorMessage from 'components/Error';

// (async () => { // -- IIFE (Immediately invoked function expression)
//   try {
//     setIsLoading(true);
//     const postData = await findPostById(query);

//     setPosts([postData]);
//   } catch (error) {
//     setError(error.message);
//   } finally {
//     setIsLoading(false);
//   }
// })()

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    if (!query) return;
    const fetchAllPosts = async () => {
      try {
        setIsLoading(true);
        const postsData = await findPostById(query);
        console.log(postsData);
        setPosts(postsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllPosts();
  }, [query]);

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.currentTarget.elements.search.value;
    console.log(searchValue);
    setSearchParams({ query: searchValue });
  };
  // if (!posts) return;
  // console.log(posts);
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <p>SearchPage</p>
        <input type="text" name="search" required />
        <button type="submit">
          <IconSearch />
        </button>
      </form>
      <section>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {posts !== null && (
          <Link
            state={{ from: location }}
            to={`/post-details/${posts.id}`}
            key={posts.id}
          >
            <span>Post Id: {posts.id}</span>
            <h2>Post Title: {posts.title}</h2>
            <p>Post Body: {posts.body}</p>
          </Link>
        )}
      </section>
    </div>
  );
}
