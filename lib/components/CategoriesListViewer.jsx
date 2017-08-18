import React, { PureComponent } from 'react';
import { registerComponent, withList } from 'meteor/vulcan:core';
import Categories from 'meteor/vulcan:categories';

class CategoriesListViewer extends PureComponent {
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <ul>
          {
            this.props.results.map(o=>(
              <li>{o.name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const options = {
  collection: Categories,
  queryName: 'categoriesListQuery',
  fragmentName: 'CategoriesList',
  limit: 0,
  pollInterval: 0,
};

registerComponent('CategoriesListViewer', CategoriesListViewer,[withList, options]);