import React from 'react';
import { type ProjectWithAllRelations } from '@repo/database';
import type { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import BgImageSpacePlanetsRaw from '../../vector-images/bg-image-space-planet.svg';
import BgImageTankRaw from '../../vector-images/bg-image-tank.svg';
import { UpdatedAt } from '../updated-at';
import { Table } from './table';
import { Metrics } from './metrics';

const BgImageSpacePlanets = BgImageSpacePlanetsRaw as StaticImageData;
const BgImageTank = BgImageTankRaw as StaticImageData;

export default function JarsTable({
  project,
}: {
  project: ProjectWithAllRelations;
}): React.JSX.Element {
  return (
    <section className='w-full relative'>
      <div
        className='w-full h-[388px] absolute overflow-hidden bg-zb-main'
        style={{
          backgroundImage: `url(${BgImageSpacePlanets.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left',
        }}>
        <div
          className='w-full h-full hidden lg:block'
          style={{
            backgroundImage: `url(${BgImageTank.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
          }}
        />
      </div>
      <div className='flex flex-col justify-center max-w-[1200px] mx-auto pt-50px md:pt-70px break-words w-full text-white relative'>
        <div className='flex flex-col gap-8 justify-around items-center lg:items-start w-full px-4 md:px-5'>
          <h2 className='text-26px md:text-40px leading-none tracking-tight'>
            Банки
          </h2>
          <Metrics project={project} />
        </div>
        <div className='w-full pl-4 mt-9 md:px-5 md:mx-auto'>
          <Table project={project} />
        </div>
        <div className='pr-3 md:pr-8 lg:pr-11'>
          <UpdatedAt project={project} />
        </div>
      </div>
    </section>
  );
}
