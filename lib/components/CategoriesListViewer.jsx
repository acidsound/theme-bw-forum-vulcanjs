import React, { Component } from 'react';
import { registerComponent } from 'meteor/vulcan:core';

class CategoriesListViewer extends Component {
  render() {
    return (
      <div>
        <h1>Another Two</h1>
      </div>
    );
  }
}

registerComponent('CategoriesListViewer', CategoriesListViewer);