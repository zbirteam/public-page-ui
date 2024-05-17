import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import Logo from '@repo/ui/images/logo.png';
import { createProjectPageUrl } from '@repo/common/constants';
import Link from 'next/link';
import { Copyrights, footerLinks } from '@repo/ui/layout/footer';
import BgImageTankRaw from '../../project/page/vector-images/bg-image-tank.svg';
import ButtonLink, { ButtonSize, ButtonStyle } from '../button-link';
import { PlusIcon } from './icons/plus-icon';
import InstagramIcon from './icons/instagram.svg';
import TelegramIcon from './icons/telegram.svg';
import YoutubeIcon from './icons/youtube.svg';

const BgImageTank = BgImageTankRaw as StaticImageData;

function CreateProject(): React.JSX.Element {
  return (
    <div className='flex-shrink-0 flex flex-col gap-4 lg:gap-7 justify-center items-center lg:justify-start lg:items-start'>
      <p className='text-xl font-medium md:text-2xl leading-tight lg:text-40px lg:leading-tight text-center uppercase lg:text-left'>
        Плануєте
        <br />
        <span className='text-zb-primary-300'>новий збір?</span>
      </p>
      <ButtonLink
        className='w-fit normal-case'
        href={createProjectPageUrl}
        icon={<PlusIcon />}
        size={ButtonSize.Large}
        style={ButtonStyle.Primary}
        target='_blank'>
        Створити збір
      </ButtonLink>
    </div>
  );
}

function Menu(): React.JSX.Element {
  return (
    <ul className='flex-shrink flex flex-col gap-4 justify-start items-center lg:items-start lg:justify-between text-base leading-none uppercase'>
      {footerLinks.map((link) => (
        <li key={link.label}>
          <Link
            className='hover:underline'
            href={link.path}
            target={link.target || '_self'}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialIcons(): React.JSX.Element {
  return (
    <div className='flex flex-row gap-6'>
      <Link href='https://s.zbir.net/lk4iTc' target='_blank'>
        <Image
          alt='Збір.Telegram'
          className='drop-shadow-2xl'
          src={TelegramIcon as StaticImageData}
        />
      </Link>
      <Link href='https://s.zbir.net/li5vRb' target='_blank'>
        <Image
          alt='Збір.Instagram'
          className='drop-shadow-2xl'
          src={InstagramIcon as StaticImageData}
        />
      </Link>
      <Link href='https://s.zbir.net/VbqZGe' target='_blank'>
        <Image
          alt='Збір.Youtube'
          className='drop-shadow-2xl'
          src={YoutubeIcon as StaticImageData}
        />
      </Link>
    </div>
  );
}

export default function Footer(): React.JSX.Element {
  return (
    <section
      className='w-full bg-zb-main'
      style={{
        backgroundImage: `url(${BgImageTank.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
      }}>
      <div className='flex flex-col gap-8 lg:flex-row justify-center lg:justify-between max-w-[1200px] mx-auto px-4 md:px-5 pt-50px md:pt-70px lg:pt-24 break-words text-white'>
        <Image
          alt='Лого'
          className='w-auto h-7 lg:hidden mx-auto'
          src={Logo as StaticImageData}
        />
        <CreateProject />
        <Menu />
        <div className='flex-shrink-0 flex flex-col justify-between items-center lg:items-end'>
          <SocialIcons />

          <Image
            alt='Лого'
            className='h-14 w-auto hidden lg:block'
            src={Logo as StaticImageData}
          />
        </div>
      </div>
      <div className='w-full max-w-[1200px] pt-7 px-4 md:px-5 mx-auto pb-10 text-white text-xs md:text-sm text-center lg:text-right leading-tight'>
        <div>
          Дизайн від{' '}
          <Link
            className='hover:underline'
            href='https://s.zbir.net/ZzrQLH'
            target='_blank'>
            Яни Воскобович
          </Link>
        </div>
        <div className='mt-5'>
          <Copyrights />
        </div>
      </div>
    </section>
  );
}
