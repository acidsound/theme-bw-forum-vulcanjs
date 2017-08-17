import { addRoute, getComponent } from 'meteor/vulcan:core';
addRoute({
  name: 'categories',
  path: '/categories/list',
  component: getComponent('CategoriesListViewer')
});
