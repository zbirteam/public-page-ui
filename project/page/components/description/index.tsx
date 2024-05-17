import React from 'react';
import Link from 'next/link';
import type { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { calculateLeftToCollect } from '@repo/common';
import { jarUrlBuilder } from '@repo/monobank-sdk';
import { type ProjectWithAllRelations } from '@repo/database';
import BgImageSpacePlanetsRaw from '../../vector-images/bg-image-space-planet.svg';
import { UpdatedAt } from '../updated-at';
import { MoneyWithSubtitle } from '../common';
import ButtonLink, {
  ButtonSize,
  ButtonStyle,
} from '../../../../components/button-link';
import { DonateIcon } from '../../vector-images/donate-icon';

const BgImageSpacePlanets = BgImageSpacePlanetsRaw as StaticImageData;

export default function Description({
  project,
  activeJarId,
}: {
  project: ProjectWithAllRelations;
  activeJarId: string | null;
}): React.JSX.Element {
  const projectLeftToCollect = calculateLeftToCollect(project);

  const commonStyles = 'p-6 rounded-lg bg-white text-black';

  return (
    <section className='w-full relative' id='description-section'>
      <div
        className='w-full h-[388px] absolute overflow-hidden bg-zb-main'
        style={{
          backgroundImage: `url(${BgImageSpacePlanets.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
        }}
      />
      <div className='w-full flex flex-col justify-center max-w-[1200px] mx-auto px-4 md:px-5 pt-50px md:pt-70px break-words text-white relative'>
        <div className='flex flex-col gap-8 justify-around items-center lg:items-start'>
          <h2 className='text-26px md:text-40px leading-none tracking-tight'>
            Про збір
          </h2>
          <div className='flex flex-col gap-6 w-full'>
            <div
              className={`${commonStyles} text-base font-normal sm:text-xl md:text-5 font-comfortaa border border-zb-main whitespace-pre-line 444`}>
              {project.description}
            </div>
            <div className='flex flex-col sm:grid sm:grid-cols-2 gap-6'>
              <div
                className={`${commonStyles} flex flex-col gap-3 border border-zb-main`}>
                <h3 className='font-bold text-2xl md:text-3xl'>
                  Організатор збору:
                </h3>
                <div>
                  <Link
                    className='font-normal text-base sm:text-xl md:text-2xl hover:underline'
                    href={project.organizationUrl}
                    target='_blank'>
                    {project.organizationName}
                  </Link>
                </div>
              </div>
              <div
                className={`${commonStyles} flex flex-col gap-6 border border-zb-main`}>
                <MoneyWithSubtitle
                  title='залишилось зібрати'
                  value={projectLeftToCollect}
                />
                <ButtonLink
                  className='w-fit'
                  disabled={!activeJarId}
                  href={activeJarId ? jarUrlBuilder(activeJarId) : undefined}
                  icon={<DonateIcon />}
                  size={ButtonSize.Large}
                  style={ButtonStyle.Primary}
                  target='_blank'>
                  Донат
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
        <div className='pr-4 md:pr-5'>
          <UpdatedAt project={project} />
        </div>
      </div>
    </section>
  );
}
