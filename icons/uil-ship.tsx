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
const UilShip = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M3.62,17.28a1,1,0,0,0,1.86-.74L4.36,13.72,11,12.25V17a1,1,0,0,0,2,0V12.25l6.64,1.47-1.12,2.82a1,1,0,0,0,.56,1.3,1,1,0,0,0,.37.07,1,1,0,0,0,.93-.63l1.55-3.91a1,1,0,0,0-.05-.84,1,1,0,0,0-.66-.51L18,11.31V7a1,1,0,0,0-1-1H15V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3V6H7A1,1,0,0,0,6,7v4.31L2.78,12a1,1,0,0,0-.66.51,1,1,0,0,0-.05.84ZM11,4h2V6H11ZM8,8h8v2.86L12.22,10h-.1L12,10l-.12,0h-.1L8,10.86ZM20.71,19.28a4.38,4.38,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.62,4.62,0,0,0-4.54,0,2.14,2.14,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.38,4.38,0,0,0-1-.45A1,1,0,0,0,2,20a1,1,0,0,0,.67,1.24,2.1,2.1,0,0,1,.57.25,4,4,0,0,0,2,.55,4.14,4.14,0,0,0,2.08-.56,2.65,2.65,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.65,2.65,0,0,1,2.56,0,4,4,0,0,0,4.1,0,2.1,2.1,0,0,1,.57-.25A1,1,0,0,0,22,20,1,1,0,0,0,20.71,19.28Z'
  }));
};

export default UilShip;