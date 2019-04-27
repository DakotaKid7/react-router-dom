import React from 'react';

const FavoriteThings = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default FavoriteThings;