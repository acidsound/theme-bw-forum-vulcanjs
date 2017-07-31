import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const CategoriesListViewer = () => {
  return (
    <div>
      <h1>Welcome To My Custom Page!</h1>
      <p>Nice to meet you.</p>
    </div>
  )
};

registerComponent('CategoriesListViewer', CategoriesListViewer);