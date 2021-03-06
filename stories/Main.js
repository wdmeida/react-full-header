import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('<FullHeader />', module)
  .add('with title', () => (
    <FullHeader title="TDD" />
  ))
  .add('with title and subtitle', () => (
    <FullHeader
      title="TDD"
      subtitle="Curso de JS com TDD na prática"
    />
  ))
  .add('with title, subtitle, bgColor', () => (
    <FullHeader
      title="TDD"
      subtitle="Curso de JS com TDD na prática"
      bgColor="#3299BB"
    />
  ))
  .add('with title, subtitle, bgColor, textColor', () => (
    <FullHeader
      title="TDD"
      subtitle="Curso de JS com TDD na prática"
      bgColor="#3299BB"
      textColor="#ff9900"
    />
  ))
  .add('with title, subtitle, bgColor, textColor, font', () => (
    <FullHeader
      title="TDD"
      subtitle="Curso de JS com TDD na prática"
      bgColor="#3299BB"
      textColor="#ff9900"
      font="cursive"
    />
  ))
  .add('with title, subtitle, bgImg', () => (
    <FullHeader
      title="TDD"
      subtitle="Curso de JS com TDD na prática"
      bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
    />
  ))
  .add('with title, subtitle, video', () => (
    <FullHeader
      title="TDD"
      subtitle="Curso de JS com TDD na prática"
      bgColor="#EBE9EB"
      textColor="#3299BB"
      video="https://ak7.picdn.net/shutterstock/videos/12021347/preview/stock-footage-water-in-glass-slow-motion.mp4"
    />
  ));
