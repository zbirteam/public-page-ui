import React from 'react';

export function ImageCalendar({
  className = '',
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 23 22'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.72 10.263v3.43m0 0v3.43m0-3.43H8.29m3.43 0h3.43M6.003 3.403V1.116m5.717 2.287V1.116m5.717 2.287V1.116M1.43 6.833h20.58M3.717 20.553h16.007c1.263 0 2.287-1.024 2.287-2.287V4.546c0-1.263-1.024-2.287-2.287-2.287H3.717c-1.263 0-2.287 1.024-2.287 2.287v13.72c0 1.263 1.024 2.287 2.287 2.287z'
        stroke='#47573e'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.801'
      />
    </svg>
  );
}
