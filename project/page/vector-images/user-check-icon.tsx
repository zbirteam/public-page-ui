import React from 'react';

export function UserCheckIcon({
  className,
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <svg
      className={className}
      fill='none'
      height='20'
      viewBox='0 0 20 20'
      width='20'
      xmlns='http://www.w3.org/2000/svg'>
      <g
        clipPath='url(#a)'
        stroke='#FFBF46'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'>
        <path d='M1.667 17.5a6.667 6.667 0 0 1 11.077-5' />
        <path d='M8.334 10.833a4.167 4.167 0 1 0 0-8.333 4.167 4.167 0 0 0 0 8.333zM13.334 15.833l1.667 1.666 3.333-3.333' />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h20v20H0z' fill='#fff' />
        </clipPath>
      </defs>
    </svg>
  );
}
