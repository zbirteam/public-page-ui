import React from 'react';
import Link from 'next/link';
import { mainJarAccumulatedCalculator } from '@repo/common';
import { type ProjectWithAllRelations } from '@repo/database';
import { jarUrlBuilder } from '@repo/monobank-sdk';
import { formatMoney } from '@repo/money-formatter';
import { UserCheckIcon } from '../../vector-images/user-check-icon';
import { DoubleCheckIcon } from '../../vector-images/double-check-icon';
import { HeartIcon } from '../../vector-images/heart-icon';
import { HeartCrackIcon } from '../../vector-images/heart-crack-icon';
import { MainIcon } from '../../vector-images/main-icon';

function MetricItem(props: {
  children: React.ReactNode;
  icon: React.JSX.Element;
  label: string;
  subtitle?: React.ReactNode | undefined;
}): React.JSX.Element {
  return (
    <div className='flex flex-row gap-2 items-start whitespace-nowrap leading-none'>
      <div className='flex-shrink-0'>{props.icon}</div>
      <div className='flex flex-col gap-1'>
        <div className='flex flex-row gap-2 items-center'>
          <span>{props.label}:</span>
          <span className='font-medium'>{props.children}</span>
        </div>
        {props.subtitle ? (
          <div className='text-xs'>{props.subtitle}</div>
        ) : undefined}
      </div>
    </div>
  );
}

export function Metrics({
  project,
}: {
  project: ProjectWithAllRelations;
}): React.JSX.Element {
  return (
    <div className='w-full px-4 flex flex-col items-center justify-between gap-6 text-md leading-none md:text-xl sm:leading-none md:items-start sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:justify-normal'>
      <MetricItem
        icon={<UserCheckIcon className='size-4 md:size-5' />}
        label='Кількість'
        subtitle={
          <>
            цілі:{' '}
            <span className='font-medium'>
              {formatMoney(project.jarsStats.goal)}
            </span>
          </>
        }>
        {project.jarsStats.count}
      </MetricItem>

      <MetricItem
        icon={<HeartIcon className='size-4 md:size-5' />}
        label='Активно'
        subtitle={
          <>
            баланс:{' '}
            <span className='font-medium'>
              {formatMoney(
                project.jarsStats.accumulated - project.jarsStats.shattered,
              )}
            </span>
          </>
        }>
        {project.jarsStats.countActive}
      </MetricItem>

      <MetricItem
        icon={<HeartCrackIcon className='size-4 md:size-5' />}
        label='Розбито'
        subtitle={
          <>
            на суму:{' '}
            <span className='font-medium'>
              {formatMoney(project.jarsStats.shattered)}
            </span>
          </>
        }>
        {project.jarsStats.countShattered}
      </MetricItem>

      <MetricItem
        icon={<DoubleCheckIcon className='size-4 md:size-5' />}
        label='Зібрано'>
        {formatMoney(project.jarsStats.accumulated)}
      </MetricItem>

      {project.mainJar ? (
        <MetricItem
          icon={<MainIcon className='size-4 md:size-5' />}
          label='Головна'>
          <Link
            className='hover:underline'
            href={jarUrlBuilder(project.mainJar.shortId)}
            target='_blank'>
            {formatMoney(mainJarAccumulatedCalculator(project.mainJar))}
          </Link>
        </MetricItem>
      ) : null}
    </div>
  );
}
