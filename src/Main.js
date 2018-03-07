import React from 'react';
import PropType from 'prop-types';

const defaultProps = {
  bgColor: '#ccc',
};

const propTypes = {
  title: PropType.string,
  subtitle: PropType.string,
};

const FullHeader = ({ title, subtitle, bgColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
  };

  const component = (
    <header style={headerStyles}>
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  );

  return component;
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
