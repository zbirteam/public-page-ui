import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { jarUrlBuilder } from '@repo/monobank-sdk';
import ButtonLink, {
  ButtonSize,
  ButtonStyle,
} from '../../../../components/button-link';
import { DonateIcon } from '../../vector-images/donate-icon';
import { SnowIcon } from '../../vector-images/snow-icon';
import ImageGroupSmall from '../../images/image-group-small.png';
import ImageGroupBig from '../../images/image-group-big.png';

export default function Motto({
  activeJarId,
}: {
  activeJarId: string | null;
}): React.JSX.Element {
  return (
    <section className='w-full bg-zb-dark'>
      <div className='flex flex-col gap-10 md:gap-14 justify-center items-center max-w-[1200px] px-4 md:px-5 py-50px md:py-70px box-border mx-auto'>
        <div className='flex flex-col gap-3 md:gap-5'>
          <div className='flex flex-row gap-1.5 xl:gap-6 justify-center items-center text-white'>
            <SnowIcon className='size-6 sm:size-8 md:size-10 lg:size-12 xl:size-[4.875rem]' />
            <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-84px uppercase leading-none whitespace-nowrap'>
              Все можливо, коли
            </div>
          </div>
          <div className='flex flex-row justify-end lg:justify-between items-start w-full'>
            <div className='max-w-96 hidden lg:block text-md xl:text-lg lg:leading-6 text-white'>
              Зберемо нашу неньку.
              <br />
              Пожертвуйте сьогодні для кращого
              <br />
              завтра! Єднаємось у боротьбі за
              <br /> незалежність!
            </div>
            <div className='text-26px pr-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px] text-zb-primary-100 uppercase whitespace-nowrap'>
              ми разом!
            </div>
          </div>
        </div>
        <Image
          alt=''
          className='w-auto max-h-60 md:hidden'
          src={ImageGroupSmall as StaticImageData}
        />
        <Image
          alt=''
          className='max-w-screen-sm xl:max-w-screen-lg hidden md:block'
          src={ImageGroupBig as StaticImageData}
        />
        <ButtonLink
          className='w-fit'
          disabled={!activeJarId}
          href={activeJarId ? jarUrlBuilder(activeJarId) : undefined}
          icon={<DonateIcon />}
          size={ButtonSize.Large}
          style={ButtonStyle.Primary}
          target='_blank'>
          Задонатити
        </ButtonLink>
      </div>
    </section>
  );
}
