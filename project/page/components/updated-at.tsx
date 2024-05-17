'use client';

import React from 'react';
import { type ProjectWithAllRelations } from '@repo/database';
import LastUpdate from '@repo/ui/project/last-update';

export function UpdatedAt({
  project,
}: {
  project: ProjectWithAllRelations;
}): React.JSX.Element {
  return (
    <div className='w-full flex justify-end items-center h-50px md:h-70px text-white text-xs'>
      <LastUpdate project={project} />
    </div>
  );
}
