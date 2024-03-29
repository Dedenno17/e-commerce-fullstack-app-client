import React, { ReactNode, useEffect } from 'react';
import Navbar from '../Header/Navbar';
import Announcement from '../Header/Announcement';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import {
  useLazyGetUserCartQuery,
  useLazyGetUserWishlistQuery,
} from '../../Store/apiCalls';
import { createCart } from '../../Store/slices/userCart-slice';
import { createWishlist } from '../../Store/slices/wishlist-slice';

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  // state of auth page
  const router = useRouter();
  const path = router.pathname;

  const dispatch = useAppDispatch();

  // global State
  const userCart = useAppSelector((state) => state.userCart.value);
  const user = useAppSelector((state) => state.user.value);

  // function get usercart from server
  const [getUserCart, { data }] = useLazyGetUserCartQuery();

  // function get userWishlist from server
  const [getUserWishlist, { data: dataWishlist }] =
    useLazyGetUserWishlistQuery();

  useEffect(() => {
    if (userCart.products.length === 0 && user) {
      getUserCart({ userId: user.others._id, token: user.accesToken });
      getUserWishlist({ userId: user.others._id, token: user.accesToken });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(createCart(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (dataWishlist) {
      dispatch(createWishlist(dataWishlist));
    }
  }, [dataWishlist, dispatch]);

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
