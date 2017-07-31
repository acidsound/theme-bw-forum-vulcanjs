import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import { STATES } from 'meteor/vulcan:accounts';

const CustomUsersAccountMenu = ({state}) =>

  <Dropdown id="accounts-dropdown" className="users-account-menu">
    <Dropdown.Toggle>
      <Components.Icon name="user"/>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Components.AccountsLoginForm formState={state? STATES[state] : STATES.SIGN_UP} />
    </Dropdown.Menu>
  </Dropdown>

CustomUsersAccountMenu.displayName = "UsersAccountMenu";

replaceComponent('UsersAccountMenu', CustomUsersAccountMenu);
