import React from 'react';
import { Components, replaceComponent } from 'meteor/vulcan:core';

const CustomPostsListHeader = () => {
  return (
    <div>
      <div className="posts-list-header">
        <Components.PostsViews />
        <Components.SearchForm/>
      </div>
    </div>
  )
};

replaceComponent('PostsListHeader', CustomPostsListHeader);
