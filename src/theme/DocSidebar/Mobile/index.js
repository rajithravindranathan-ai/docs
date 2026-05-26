
import React from 'react';
import DocSidebarMobile from '@theme-original/DocSidebar/Mobile';

export default function DocSidebarMobileWrapper(props) {
  return (
    <div style={{height: '100%', overflowY: 'auto'}}>
      <DocSidebarMobile {...props} />
    </div>
  );
}