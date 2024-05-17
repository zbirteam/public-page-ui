import React from 'react';
import { type StaticImageData } from 'next/image';
import { type Jar, type ProjectWithAllRelations } from '@repo/database';
import { percentCalculator } from '@repo/common';
import { comfortaa, montserratAlternates } from '../../fonts';
import Footer from '../../components/footer';
import Hero from './components/hero';
import Statistic from './components/statistic';
import JarsTable from './components/jars';
import Description from './components/description';
import Motto from './components/motto';
import BgCamoRaw from './images/bg-camo.png';

const BgCamo = BgCamoRaw as StaticImageData;

function Background(): React.JSX.Element {
  return (
    <div
      className='fixed z-[-9999] top-0 left-0 w-screen h-screen'
      style={{
        backgroundImage: `url(${BgCamo.src})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '150%',
        backgroundAttachment: 'scroll',
        backgroundPosition: 'top',
      }}
    />
  );
}

function findMinFilledJar(jars: Jar[]): Jar | null {
  let minPercentageJar = null;
  let minPercentage = Number.MAX_VALUE;

  jars.forEach((jar) => {
    const percent = percentCalculator(jar.accumulated, jar.goal);

    if (percent < minPercentage) {
      minPercentage = percent;
      minPercentageJar = jar;
    }
  });

  return minPercentageJar;
}

function findActiveJarId(project: ProjectWithAllRelations): string | null {
  if (project.mainJar) {
    return project.mainJar.shortId;
  }

  const minFilledJar = findMinFilledJar(project.jars);

  return minFilledJar?.shortId ?? null;
}

export default function Page({
  project,
}: {
  project: ProjectWithAllRelations;
}): React.JSX.Element {
  const activeJarId = findActiveJarId(project);

  return (
    <main
      className={`min-w-[375px] relative ${montserratAlternates.variable} ${comfortaa.variable} font-montserrat-alternates`}
      style={{ '--main-color': '#4c5e42' } as React.CSSProperties}>
      <Background />
      <Hero activeJarId={activeJarId} project={project} />
      <Statistic project={project} />
      <JarsTable project={project} />
      <Description activeJarId={activeJarId} project={project} />
      <Motto activeJarId={activeJarId} />
      <Footer />
    </main>
  );
}
