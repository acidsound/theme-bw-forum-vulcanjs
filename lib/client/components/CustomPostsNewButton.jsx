import { Components, replaceComponent, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'meteor/vulcan:i18n';
import Button from 'react-bootstrap/lib/Button';

const CustomPostsNewButton = (props) => {

  const size = props.currentUser ? 'large' : 'small';
  const button = <Button className="posts-new-button" bsStyle="primary"><Components.Icon name="pencil"/></Button>;
  return (
    <Components.ModalTrigger size={size} title={""} component={button}>
      <Components.PostsNewForm />
    </Components.ModalTrigger>
  )
};

CustomPostsNewButton.displayName = 'PostsNewButton';

CustomPostsNewButton.propTypes = {
  currentUser: PropTypes.object,
};

CustomPostsNewButton.contextTypes = {
  messages: PropTypes.object,
  intl: intlShape
};

replaceComponent('PostsNewButton', CustomPostsNewButton, withCurrentUser);
