import React, { ReactNode } from 'react';
import Navbar from '../Header/Navbar';
import Announcement from '../Header/Announcement';

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <header>
        <Announcement />
        <Navbar />
      </header>
      <main className="w-full min-h-screen">{props.children}</main>
      <footer></footer>
    </div>
  );
};

export default React.memo(Layout);
