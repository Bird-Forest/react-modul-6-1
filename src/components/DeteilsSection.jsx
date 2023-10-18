import React, { useEffect } from 'react';
import { useState } from 'react';
import DetailsInnerContent from './DetailsInnerContent';

export const DeteilsSection = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [dataType, setDataType] = useState('users');
  // ('users, posts, comments');
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };
  useEffect(() => {
    console.log('componentDidUpdate');
  }, [dataType]);
  return (
    <div>
      <button onClick={handleToggleDetails}>Click to toggle the details</button>
      {showDetails === true && <DetailsInnerContent />}
      <div>
        <button
          className={`typeBtn ${dataType === 'users' ? 'active' : ''}`}
          onClick={() => setDataType('users')}
        >
          Users
        </button>
        <button
          className={`typeBtn ${dataType === 'posts' ? 'active' : ''}`}
          onClick={() => setDataType('posts')}
        >
          Posts
        </button>
        <button
          className={`typeBtn ${dataType === 'comments' ? 'active' : ''}`}
          onClick={() => setDataType('comments')}
        >
          Comments
        </button>
        {dataType === 'users' && <p>Users here</p>}
        {dataType === 'posts' && <p>Posts here</p>}
        {dataType === 'comments' && <p>Comments here</p>}
      </div>
    </div>
  );
};
