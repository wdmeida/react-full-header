import React from 'react';
import PropType from 'prop-types';

const propTypes = {
  title: PropType.string,
  subtitle: PropType.string,
};

const FullHeader = ({ title, subtitle }) => {
  const component = (
    <header>
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  );

  return component;
};

FullHeader.propTypes = propTypes;

export default FullHeader;
