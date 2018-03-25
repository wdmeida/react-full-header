# React full header
[![Build Status](https://travis-ci.org/willianjusten/react-full-header.svg?branch=master)](https://travis-ci.org/wdmeida/react-full-header)

React component developed during the course of [JS com TDD na prática](https://www.udemy.com/js-com-tdd-na-pratica/?couponCode=GITHUB_LINK).

## Demo

[Live examples](https://willianjusten.github.io/react-full-header)

## Installation

```sh
$ npm install --save react-full-header
```

## Basic Usage

```jsx
import FullHeader from 'react-full-header';

...
render() {
    return (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bgColor="#EBE9EB"
            textColor="#3299BB"
            font="Lobster"
            video="videos/my_video.mp4"
        />
    );
}
...
```

## Props

- `title` (string) - main title
- `subtitle` (string) - subtitle
- `bgColor` (string) - background color
- `bgImg` (string) - image to background
- `video` (string) - video to background
- `textColor` (string) - texts color
- `font` (string) - font-family to texts

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

If you want to contribute with this component:
[Contributing Documentation](https://github.com/willianjusten/react-full-header/blob/master/CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
