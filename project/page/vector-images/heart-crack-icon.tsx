import React from 'react';

export function HeartCrackIcon({
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
      <path
        d='m10 5 1.667 1.667-3.334 1.666 2.5 2.5M10 5c-1.5-1.748-4.005-2.288-5.884-.687-1.879 1.6-2.143 4.275-.668 6.168 1.227 1.573 4.94 4.892 6.156 5.966.136.12.204.18.284.204.069.02.145.02.214 0 .08-.023.147-.084.284-.204 1.216-1.074 4.929-4.393 6.156-5.966 1.475-1.893 1.243-4.585-.668-6.168C13.963 2.729 11.499 3.253 10 5z'
        stroke='#FFBF46'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  );
}
