import { addRoute } from 'meteor/vulcan:core';
import CategoriesListViewer from '../components/CategoriesListViewer.jsx';
addRoute({
  name: 'categories',
  path: '/categories/list',
  component: CategoriesListViewer
});
