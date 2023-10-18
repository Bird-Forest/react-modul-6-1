import React, { Suspense, lazy, useEffect, useRef } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

import { findPostById } from 'servise/api';
import Loader from 'components/Loader';
import ErrorMessage from 'components/Error';
import { useDispatch, useSelector } from 'react-redux';

const CommentPage = lazy(() => import('pages/CommentPage'));

export default function PostDetailPage() {
  const { postId } = useParams();

  const location = useLocation();
  console.log(location);
  const backLinkHref = useRef(location.state?.from ?? '/');

  // const [postDetails, setPostDetails] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const postDetails = useSelector(state => state.postDetails.postDetailsData);
  const isLoading = useSelector(state => state.postDetails.isLoading);
  const error = useSelector(state => state.postDetails.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!postId) return;

    const fetchAllPosts = async () => {
      try {
        // setIsLoading(true);
        dispatch({ type: 'postDetails / setIsLoading', payload: true });
        const postData = await findPostById(postId);
        dispatch({ type: 'postDetails/setPostDetails', payload: postData });
        // setPostDetails(postData);
      } catch (error) {
        dispatch({ type: 'postDetails/setError', payload: error.message });
        // setError(error.message);
      } finally {
        // setIsLoading(false);
        dispatch({ type: 'postDetails / setIsLoading', payload: false });
      }
    };

    fetchAllPosts();
  }, [postId, dispatch]);
  return (
    <div>
      <Link to={backLinkHref.current}>Go Back</Link>

      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {postDetails !== null && (
        <div>
          <h2>Post Title: {postDetails.title}</h2>
          <p>Post Body: {postDetails.body}</p>
        </div>
      )}

      <div>
        <NavLink to="comments" className="header-link">
          Comments
        </NavLink>
      </div>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="comments" element={<CommentPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
