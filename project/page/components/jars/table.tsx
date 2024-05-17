import React from 'react';
import Link from 'next/link';
import {
  type Jar,
  type ProjectWithAllRelations,
  JarStatus,
} from '@repo/database';
import { percentCalculator } from '@repo/common';
import { jarUrlBuilder } from '@repo/monobank-sdk';
import { cdnUrl } from '@repo/common/constants';
import { formatMoney } from '@repo/money-formatter';
import ImageWithFallback from '@repo/ui/components/image-with-fallback';
import ButtonLink, {
  ButtonSize,
  ButtonStyle,
} from '../../../../components/button-link';
import { DonateIcon } from '../../vector-images/donate-icon';

interface JarsTableProps {
  project: ProjectWithAllRelations;
}

function formatJarGoal(jar: Jar): string {
  return jar.goal > 0 ? formatMoney(jar.goal) : 'Не вказано';
}

export function Table({ project }: JarsTableProps): React.JSX.Element {
  return (
    <div className='overflow-x-auto rounded-l-lg py-6 md:rounded-lg bg-white text-black border border-zb-main'>
      <table className='items-center w-full border-separate border-spacing-0 whitespace-nowrap'>
        <thead>
          <tr className='uppercase leading-none font-semibold text-center align-middle'>
            <th className='px-3 lg:pl-6 py-3 text-left'>Банка</th>
            <th className='hidden lg:table-cell p-3'>Добродій</th>
            <th className='hidden lg:table-cell p-3'>Ціль</th>
            <th className='hidden lg:table-cell p-3'>Зібрано</th>
            <th className='p-3'>Прогрес</th>
            <th className='hidden lg:table-cell p-3'>Статус</th>
            <th className='p-3 lg:pr-6'>Донат</th>
          </tr>
        </thead>
        <tbody>
          {project.jars.map((jar: Jar, index: number) => {
            const fallbackIconIndex = index % 2 === 0 ? 1 : 0;
            const percent = percentCalculator(jar.accumulated, jar.goal);
            const jarUrl = jarUrlBuilder(jar.shortId);

            return (
              <tr
                className={`text-xs leading-none h-[3.875rem] lg:h-14 ${index % 2 === 0 ? 'bg-zb-light' : 'bg-white'}`}
                key={jar.longId}>
                <td className='text-left pr-3 pl-3 lg:pl-6 align-middle'>
                  <div className='table'>
                    <div className='table-cell align-middle pr-2'>
                      <Link href={jarUrl} target='_blank'>
                        <ImageWithFallback
                          alt={jar.title}
                          className='h-[38px] w-[38px] max-w-none rounded-full float-left'
                          height={38}
                          srcFallback={`${cdnUrl}/jar/icon-${fallbackIconIndex}.png`}
                          srcOrigin={jar.imageUrl}
                          width={38}
                        />
                      </Link>
                    </div>
                    <div className='table-cell align-middle'>
                      <div className='flex flex-col gap-1 max-w-44 sm:max-w-64 lg:max-w-44'>
                        <Link
                          className='uppercase truncate font-semibold hover:underline'
                          href={jarUrl}
                          target='_blank'>
                          {jar.title}
                        </Link>
                        <div className='font-light text-[#889681] lg:hidden'>
                          {jar.ownerName}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className='hidden lg:table-cell px-3 align-middle text-center text-sm'>
                  {jar.ownerName}
                </td>
                <td className='hidden lg:table-cell px-3 align-middle text-center text-sm'>
                  {formatJarGoal(jar)}
                </td>
                <td className='hidden lg:table-cell px-3 align-middle text-center text-sm'>
                  {formatMoney(jar.accumulated)}
                </td>
                <td className='px-3 align-middle '>
                  <div className='flex flex-col gap-1 items-center'>
                    <div className='flex flex-col items-start relative rounded-full w-56 h-6 lg:w-48 lg:h-4 border border-[#F6D365]'>
                      <div
                        className='bg-gradient-to-r from-[#B6E9C1] to-[#F6D365] rounded-full h-full'
                        style={{
                          width: `${percent > 100 ? 100 : percent}%`,
                        }}
                      />
                      <div className='left-0 top-0 absolute flex gap-1 text-center items-center justify-center text-sm w-full h-full lg:text-xs'>
                        <span className='lg:hidden'>
                          {formatMoney(jar.accumulated)},
                        </span>
                        <span>{percent} %</span>
                      </div>
                    </div>
                    <div className='flex flex-row gap-1 items-end lg:hidden'>
                      <span className='text-[8px] leading-none uppercase pb-[1px]'>
                        Ціль:
                      </span>
                      <span className='text-sm leading-none'>
                        {formatJarGoal(jar)}
                      </span>
                    </div>
                  </div>
                </td>
                <td className='hidden lg:table-cell px-3 align-middle text-center'>
                  {jar.status === JarStatus.ACTIVE ? (
                    <span className='text-zb-main font-medium uppercase'>
                      Активна
                    </span>
                  ) : (
                    <span className='text-[#949494] font-medium uppercase'>
                      Розбита
                    </span>
                  )}
                </td>
                <td className='pl-3 pr-3 lg:pr-6 align-middle text-center w-8'>
                  <ButtonLink
                    className='w-full'
                    disabled={jar.status !== JarStatus.ACTIVE}
                    href={jarUrl}
                    icon={<DonateIcon />}
                    size={ButtonSize.Small}
                    style={ButtonStyle.Primary}
                    target='_blank'>
                    Донат
                  </ButtonLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
