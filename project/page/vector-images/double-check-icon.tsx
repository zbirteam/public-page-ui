import React from 'react';

export function DoubleCheckIcon({
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
        strokeWidth='2.5'>
        <path d='m15 5-9.166 9.167L1.667 10M18.334 8.334l-6.25 6.25-1.25-1.25' />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h20v20H0z' fill='#fff' />
        </clipPath>
      </defs>
    </svg>
  );
}
