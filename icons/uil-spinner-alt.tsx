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
const UilSpinnerAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M6.8042,15A.99956.99956,0,0,0,5.438,14.63379l-1.73242,1a1.00016,1.00016,0,0,0,1,1.73242l1.73242-1A1.00073,1.00073,0,0,0,6.8042,15ZM3.70557,8.36621l1.73242,1a1.00016,1.00016,0,1,0,1-1.73242l-1.73242-1a1.00016,1.00016,0,0,0-1,1.73242ZM6,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H5A1,1,0,0,0,6,12ZM17.1958,9a1.0006,1.0006,0,0,0,1.36621.36621l1.73242-1a1.00016,1.00016,0,1,0-1-1.73242l-1.73242,1A1.00073,1.00073,0,0,0,17.1958,9ZM15,6.8042A1.0006,1.0006,0,0,0,16.36621,6.438l1-1.73242a1.00016,1.00016,0,1,0-1.73242-1l-1,1.73242A1.00073,1.00073,0,0,0,15,6.8042Zm5.29443,8.82959-1.73242-1a1.00016,1.00016,0,1,0-1,1.73242l1.73242,1a1.00016,1.00016,0,0,0,1-1.73242ZM16.36621,17.562a1.00016,1.00016,0,1,0-1.73242,1l1,1.73242a1.00016,1.00016,0,1,0,1.73242-1ZM21,11H19a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm-9,7a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,12,18Zm-3-.8042a.99954.99954,0,0,0-1.36621.36621l-1,1.73242a1.00016,1.00016,0,0,0,1.73242,1l1-1.73242A1.00073,1.00073,0,0,0,9,17.1958ZM12,2a1,1,0,0,0-1,1V5a1,1,0,0,0,2,0V3A1,1,0,0,0,12,2Z'
  }));
};

export default UilSpinnerAlt;