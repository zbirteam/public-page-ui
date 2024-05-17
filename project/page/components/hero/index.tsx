'use client';

import React, { type ReactNode } from 'react';
import Image from 'next/image';
import { type StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { type ProjectWithAllRelations } from '@repo/database';
import ImageWithFallback from '@repo/ui/components/image-with-fallback';
import { jarUrlBuilder } from '@repo/monobank-sdk';
import ButtonLink, {
  ButtonSize,
  ButtonStyle,
} from '../../../../components/button-link';
import { DonateIcon } from '../../vector-images/donate-icon';
import BgImageTankRaw from '../../vector-images/bg-image-tank.svg';
import BgImagePlanetsRaw from '../../vector-images/bg-image-planets.svg';
import CoverDefaultRaw from '../../images/no-cover.png';

const BgImageTank = BgImageTankRaw as StaticImageData;
const BgImagePlanets = BgImagePlanetsRaw as StaticImageData;
const CoverDefault = CoverDefaultRaw as StaticImageData;

export default function Hero({
  project,
  activeJarId,
}: {
  project: ProjectWithAllRelations;
  activeJarId: string | null;
}): React.JSX.Element {
  return (
    <section
      className='w-full bg-zb-main'
      style={{
        backgroundImage: `url(${BgImageTank.src}), url(${BgImagePlanets.src}), url(${BgImagePlanets.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom, top left, top right',
      }}>
      <div className='flex flex-col max-w-[1200px] mx-auto px-4 md:px-5 py-7 md:py-50px text-white'>
        <Title className='text-center md:text-left lg:hidden'>
          {project.title}
        </Title>
        <div className='flex flex-row gap-10'>
          <div className='flex flex-col flex-shrink lg:flex-shrink-0 justify-between md:max-w-[41.25rem]'>
            <Title className='hidden md:hidden lg:block'>{project.title}</Title>
            <CoverImage className='mb-7 md:hidden' project={project} />
            <div className='md:h-full md:flex md:flex-col md:justify-between'>
              <div className='line-clamp-6 text-base font-light sm:text-md md:text-[22px] md:leading-tight lg:line-clamp-4 xl:line-clamp-6 font-comfortaa whitespace-pre-line'>
                {project.description}
              </div>
              <ActionButtons
                project={project}
                activeJarId={activeJarId}
                className='justify-between sm:justify-start pt-7 md:pt-10'
              />
            </div>
          </div>
          <CoverImage
            className='flex-shrink hidden md:block lg:mt-4'
            project={project}
          />
        </div>
      </div>
    </section>
  );
}

function Title(props: {
  children: ReactNode;
  className: string;
}): React.JSX.Element {
  return (
    <div className={`pb-7 ${props.className}`}>
      <h1 className='text-28px leading-tight sm:text-40px sm:leading-tight md:text-54px md:leading-tight md:line-clamp-2'>
        {props.children}
      </h1>
    </div>
  );
}

function CoverImage({
  project,
  className,
}: {
  project: ProjectWithAllRelations;
  className: string;
}): React.JSX.Element {
  return (
    <div
      className={`rounded-lg overflow-hidden min-w-[343px] max-w-[735px] md:min-w-[230px] md:max-w-[460px] ${className}`}>
      {project.coverUrl ? (
        <ImageWithFallback
          alt={project.title}
          className='rounded-lg aspect-[4/3]'
          height={1106}
          srcFallback={CoverDefault.src}
          srcOrigin={project.coverUrl}
          width={1470}
        />
      ) : (
        <Image
          alt={project.title}
          className='rounded-lg aspect-[4/3]'
          height={1106}
          src={CoverDefault}
          width={1470}
        />
      )}
    </div>
  );
}

function ActionButtons({
  project,
  className,
  activeJarId = null,
}: {
  project: ProjectWithAllRelations;
  className: string;
  activeJarId: string | null;
}): React.JSX.Element {
  const scroll = (): void => {
    const section = document.querySelector('#description-section');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`flex flex-row gap-x-5 md:gap-x-10 ${className}`}>
      <ButtonLink
        disabled={!activeJarId}
        href={activeJarId ? jarUrlBuilder(activeJarId) : undefined}
        icon={<DonateIcon />}
        size={ButtonSize.Large}
        style={ButtonStyle.Primary}
        target='_blank'>
        Донат
      </ButtonLink>

      {project.callToAction ? (
        <ButtonLink
          href={project.callToAction.url}
          size={ButtonSize.Large}
          style={ButtonStyle.Secondary}>
          {project.callToAction.label}
        </ButtonLink>
      ) : (
        <ButtonLink
          onClick={scroll}
          size={ButtonSize.Large}
          style={ButtonStyle.Secondary}>
          Детальніше
        </ButtonLink>
      )}
    </div>
  );
}
