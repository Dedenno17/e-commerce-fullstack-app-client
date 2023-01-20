import React, { ReactNode, useEffect, useState } from 'react';
import Navbar from '../Header/Navbar';
import Announcement from '../Header/Announcement';
import Footer from '../Footer/Footer';

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  // state of auth page
  const [isAuthPage, setIsAuthPage] = useState<boolean>(true);

  // check if its authpage then navbar and footer wouldnt be loaded
  useEffect(() => {
    if (window.location.pathname === '/authentication') {
      setIsAuthPage(true);
    } else {
      setIsAuthPage(false);
    }
  }, []);

  return (
    <div>
      {!isAuthPage && (
        <header>
          <Announcement />
          <Navbar />
        </header>
      )}
      <main className="w-full min-h-screen">{props.children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default React.memo(Layout);
