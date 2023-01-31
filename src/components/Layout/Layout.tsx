import React, { ReactNode } from 'react';
import Navbar from '../Header/Navbar';
import Announcement from '../Header/Announcement';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  // state of auth page
  const router = useRouter();
  const path = router.pathname;

  return (
    <div>
      {path !== '/authentication' && (
        <header>
          <Announcement />
          <Navbar />
        </header>
      )}
      <main className="w-full min-h-screen">{props.children}</main>
      {path !== '/authentication' && <Footer />}
    </div>
  );
};

export default React.memo(Layout);
