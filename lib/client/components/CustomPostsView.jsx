import { replaceComponent, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'meteor/vulcan:i18n';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router'
import Users from 'meteor/vulcan:users';

const CustomPostsViews = (props) => {

  let views = ["top", "new", "best"];
  const adminViews = ["pending", "rejected", "scheduled"];

  if (Users.canDo(props.currentUser, "posts.edit.all")) {
    views = views.concat(adminViews);
  }

  const query = _.clone(props.router.location.query);

  return (
    <ul className="posts-views">
      {views.map(view =>
        <LinkContainer key={view} to={{pathname: "/", query: {...query, view: view}}} className="dropdown-item">
          <MenuItem>
            <FormattedMessage id={"posts."+view}/>
          </MenuItem>
        </LinkContainer>
      )}
      <LinkContainer to={"/daily"} className="dropdown-item">
        <MenuItem className={"bar"}>
          <FormattedMessage id="posts.daily"/>
        </MenuItem>
      </LinkContainer>
    </ul>
  )
};

CustomPostsViews.propTypes = {
  currentUser: PropTypes.object,
  defaultView: PropTypes.string
};

CustomPostsViews.defaultProps = {
  defaultView: "top"
};

CustomPostsViews.contextTypes = {
  currentRoute: PropTypes.object,
  intl: intlShape
};

CustomPostsViews.displayName = "PostsViews";

replaceComponent('PostsViews', CustomPostsViews, withCurrentUser, withRouter);
