import { ModalTrigger, Components, replaceComponent, withList, Utils, getRawComponent } from "meteor/vulcan:core";
import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Button from 'react-bootstrap/lib/Button';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { LinkContainer } from 'react-router-bootstrap';
import Categories from 'meteor/vulcan:categories';

class CustomCategoriesList extends getRawComponent('CategoriesList') {

  render() {

    const allCategoriesQuery = _.clone(this.props.router.location.query);
    delete allCategoriesQuery.cat;
    const nestedCategories = this.getNestedCategories();

    return (
      <div>
        <DropdownButton
          bsStyle="default"
          className="categories-list btn-secondary"
          title={"Tags"}
          id="categories-dropdown"
        >
          <div className="category-menu-item category-menu-item-all dropdown-item">
            <LinkContainer className="category-menu-item-title" to={{pathname:"/", query: allCategoriesQuery}}>
              <MenuItem eventKey={0}>
                <FormattedMessage id="categories.all"/>
              </MenuItem>
            </LinkContainer>
          </div>
          {
            // categories data are loaded
            !this.props.loading ?
              // there are currently categories
              nestedCategories && nestedCategories.length > 0 ?
                nestedCategories.map((category, index) => <Components.CategoriesNode key={index} category={category} index={index} openModal={this.openCategoryEditModal}/>)
                // not any category found
                : null
              // categories are loading
              : <div className="dropdown-item"><MenuItem><Components.Loading /></MenuItem></div>
          }
          <Components.ShowIf check={Categories.options.mutations.new.check}>
            <div className="categories-new-button category-menu-item dropdown-item">
              <ModalTrigger title={<FormattedMessage id="categories.new"/>} component={<Button bsStyle="primary"><FormattedMessage id="categories.new"/></Button>}>
                <Components.CategoriesNewForm/>
              </ModalTrigger>
            </div>
          </Components.ShowIf>
        </DropdownButton>

      </div>
    )

  }
}

replaceComponent('CategoriesList', CustomCategoriesList);
