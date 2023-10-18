import React, { useEffect } from 'react';

export default function DetailsInnerContent() {
  useEffect(() => {
    console.log('componentDidMount');
    return () => {
      console.log('componentWillUnMount');
    };
  }, []);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit
        laboriosam maiores animi dignissimos, inventore qui alias dolore error
        ex natus. Cumque voluptatem, maiores aliquid obcaecati eum ut placeat
        quasi at ea dolor non blanditiis optio delectus impedit magnam odio
        quaerat recusandae, nisi praesentium eligendi unde illo ab perferendis
        corrupti.
      </p>
    </div>
  );
}
