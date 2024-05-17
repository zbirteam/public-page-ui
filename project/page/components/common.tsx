import React from 'react';
import { formatMoney, symbol } from '@repo/money-formatter';

export function Subscript(props: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <span className='text-[66%] leading-none'>{props.children}</span>;
}

export function MoneyFormat({
  value,
  className,
}: {
  value: bigint;
  className: string;
}): React.JSX.Element {
  return (
    <div className={className}>
      {formatMoney(value, false)}
      <Subscript>{` ${symbol}`}</Subscript>
    </div>
  );
}

export function Label(props: { children: React.ReactNode }): React.JSX.Element {
  return (
    <div className='text-md md:text-xl lg:text-3xl leading-none font-medium font-comfortaa lowercase'>
      {props.children}
    </div>
  );
}

export function MoneyWithSubtitle({
  value,
  title,
}: {
  value: bigint;
  title: string;
}): React.JSX.Element {
  return (
    <div className='flex-shrink-0 flex flex-col gap-1.5 md:gap-0'>
      <Label>{title}</Label>
      <MoneyFormat
        className='text-3xl sm:text-4xl lg:text-6xl font-medium leading-none whitespace-nowrap'
        value={value}
      />
    </div>
  );
}
