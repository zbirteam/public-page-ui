import React from 'react';

export function SnowIcon({
  className = '',
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <svg
      className={className}
      fill='none'
      height='78'
      viewBox='0 0 78 78'
      width='78'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='m39 0 .008 38.962L53.925 2.969 39.022 38.968l27.555-27.545-27.545 27.555 36-14.903-35.994 14.918L78 39l-38.962.008 35.993 14.917-35.999-14.903 27.545 27.555-27.555-27.545 14.903 36-14.917-35.994L39 78l-.008-38.962-14.917 35.993 14.903-35.999-27.555 27.545 27.545-27.555-36 14.903 35.994-14.917L0 39l38.962-.008L2.969 24.075l35.999 14.903-27.545-27.555 27.555 27.545-14.903-36 14.918 35.994L39 0z'
        fill='none'
        stroke='currentColor'
        strokeWidth='4'
      />
    </svg>
  );
}
