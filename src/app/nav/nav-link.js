import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Link from 'react-toolbox/lib/link/Link';

const NavLink = ({
  onClick,
  ...props
}) => {
  return (
    <LinkContainer
      {...props}
      onClick={onClick}
    >
      <Link
        {...props}
      />
    </LinkContainer>
  );
};

NavLink.propTypes = {
  onClick: React.PropTypes.func
};

export default NavLink;
