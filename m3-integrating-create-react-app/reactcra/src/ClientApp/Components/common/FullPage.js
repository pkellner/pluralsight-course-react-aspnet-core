import React from 'react';

import CodeCampMenu from './CodeCampMenu';
import PageTop from './PageTop';
import Routes from '../../Routes';

export default function FullPage() {
  return (
    <div>
        <PageTop>
          <CodeCampMenu />
        </PageTop>
        <Routes />
      </div>
  );
}
