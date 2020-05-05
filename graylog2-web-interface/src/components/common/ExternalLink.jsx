import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Icon from './Icon';

/**
 * Component that renders a link to an external resource.
 */
class ExternalLink extends React.Component {
  static propTypes = {
    /** Link to the external location. If this is not defined, the component does not render a `<a />` element but only the text and the icon. */
    href: PropTypes.string,
    /** Text for the link. (should be one line) */
    children: PropTypes.node.isRequired,
    /** Browser window target attribute for the link. */
    target: PropTypes.string,
    /** FontAwesome icon class name to use for the indicator icon. */
    iconClass: PropTypes.string,
    /** Class name for the link. Can be used to change the styling of the link. */
    className: PropTypes.string,
  };

  static defaultProps = {
    href: '',
    target: '_blank',
    iconClass: 'external-link-alt',
    className: '',
  };

  render() {
    const { children, className, href, iconClass, target } = this.props;
    const content = (
      <span>
        {children}
        &nbsp;
        <Icon name={iconClass} />
      </span>
    );

    // This makes the component usable as child element of a component that already renders a link (e.g. MenuItem)
    if (_.trim(href) === '') {
      return content;
    }

    return (
      <a href={href} target={target} className={className}>
        {content}
      </a>
    );
  }
}

export default ExternalLink;
