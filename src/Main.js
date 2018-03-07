import React from 'react';
import PropType from 'prop-types';

import {
  containerStyle,
  headerStyle,
  subtitleStyle,
  titleStyle,
  videoStyle,
} from './Styles';

const defaultProps = {
  bgColor: '#ccc',
  textColor: '#fff',
  font: 'sans-serif',
  bgImg: '',
};

const propTypes = {
  title: PropType.string,
  subtitle: PropType.string,
  bgColor: PropType.string,
  textColor: PropType.string,
  font: PropType.string,
  bgImg: PropType.string,
  video: PropType.string,
};

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg, video }) => {
  const headerStyleCombined = {
    ...headerStyle,
    backgroundColor: bgColor,
    backgroundImage: `url(${bgImg})`,
    color: textColor,
    fontFamily: font,
  };

  const component = (
    <header style={headerStyleCombined}>
      <div style={containerStyle}>
        {title && <h1 style={titleStyle}>{title}</h1>}
        {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
      </div>
      {video && <video style={videoStyle} autoPlay muted loop src={video} />}
    </header>
  );

  return component;
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
