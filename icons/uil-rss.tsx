import React from 'react';

type Props = {
    /**
     * The color of the icon
     * @default 'currentColor'
     */
    color?: string;
    /**
     * The size of the icon
     * @default 24
     */
    size?: string | number;
} & React.SVGProps<SVGElement>

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilRss = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M2.88,16.88a3,3,0,0,0,0,4.24,3,3,0,0,0,4.24,0,3,3,0,0,0-4.24-4.24Zm2.83,2.83a1,1,0,0,1-1.42-1.42,1,1,0,0,1,1.42,0A1,1,0,0,1,5.71,19.71ZM5,12a1,1,0,0,0,0,2,5,5,0,0,1,5,5,1,1,0,0,0,2,0,7,7,0,0,0-7-7ZM5,8a1,1,0,0,0,0,2,9,9,0,0,1,9,9,1,1,0,0,0,2,0,11.08,11.08,0,0,0-3.22-7.78A11.08,11.08,0,0,0,5,8Zm10.61.39A15.11,15.11,0,0,0,5,4,1,1,0,0,0,5,6,13,13,0,0,1,18,19a1,1,0,0,0,2,0A15.11,15.11,0,0,0,15.61,8.39Z'
  }));
};

export default UilRss;