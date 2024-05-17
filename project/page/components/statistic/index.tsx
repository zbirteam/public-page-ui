import React from 'react';
import { type ProjectWithAllRelations } from '@repo/database';
import {
  getProjectDurationMeta,
  percentCalculator,
  calculateAccumulated,
} from '@repo/common';
import { Label, MoneyWithSubtitle, Subscript } from '../common';
import { UpdatedAt } from '../updated-at';
import { ImageNotepad } from './image-notepad';
import { ImageCalendar } from './image-calendar';
import { ImageTarget } from './image-target';
import { ImageBoom } from './image-boom';

export default function Statistic({
  project,
}: {
  project: ProjectWithAllRelations;
}): React.JSX.Element {
  const projectDurationMeta = getProjectDurationMeta(project);
  const projectAccumulated = calculateAccumulated(project);
  const projectPercent = percentCalculator(projectAccumulated, project.goal);

  const commonStyles =
    'h-[100px] md:h-[120px] lg:h-[170px] px-5 whitespace-nowrap';
  const edgeStyles =
    'col-span-full md:col-span-8 flex gap-2.5 md:gap-4 justify-center items-center';
  const middleStyles =
    'col-span-7 md:col-span-6 flex justify-center items-center bg-green-50 border-b border-zb-main';

  return (
    <section className='w-full'>
      <div className='max-w-[1200px] mx-auto px-4 md:px-5 pt-50px md:pt-70px'>
        <div className='grid grid-cols-[repeat(14,_minmax(0,_1fr))] box-border bg-white rounded-lg border border-zb-main overflow-hidden text-black'>
          <div
            className={`${commonStyles} ${edgeStyles} border-b border-zb-main`}>
            <ImageTarget className='drop-shadow-2xl h-14 lg:h-[110px] flex-shrink' />
            <MoneyWithSubtitle title='наша ціль' value={project.goal} />
          </div>
          <div className={`${commonStyles} ${middleStyles} md:border-l`}>
            <MetricWithSubtitleAndIcon
              icon={<ImageCalendar className='h-6 lg:h-10' />}
              label={projectDurationMeta.label}>
              {projectDurationMeta.timeValue}{' '}
              <Subscript>{projectDurationMeta.timeLabel}</Subscript>
            </MetricWithSubtitleAndIcon>
          </div>
          <div
            className={`${commonStyles} ${middleStyles} border-l md:border-0 md:border-r`}>
            <MetricWithSubtitleAndIcon
              icon={<ImageNotepad className='h-6 lg:h-10' />}
              label='зібрано'>
              {projectPercent}&nbsp;<Subscript>%</Subscript>
            </MetricWithSubtitleAndIcon>
          </div>
          <div className={`${commonStyles} ${edgeStyles}`}>
            <MoneyWithSubtitle title='зібрано' value={projectAccumulated} />
            <ImageBoom className='drop-shadow-2xl h-14 lg:h-[138px] flex-shrink' />
          </div>
        </div>
        <div className='pr-4 md:pr-5'>
          <UpdatedAt project={project} />
        </div>
      </div>
    </section>
  );
}

function MetricWithSubtitleAndIcon(props: {
  children: React.ReactNode;
  label: string;
  icon: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className='flex flex-col justify-center items-center gap-1.5 md:gap-0'>
      <div className='flex flex-row gap-2.5 lg:gap-4 justify-center items-center'>
        {props.icon}
        <div className='text-3xl sm:text-4xl lg:text-6xl font-medium leading-none'>
          {props.children}
        </div>
      </div>
      <Label>{props.label}</Label>
    </div>
  );
}
