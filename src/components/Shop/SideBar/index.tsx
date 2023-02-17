import React, { ReactNode, useEffect, useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import FilterComponent from './FilterComponent';

// interface
interface FilterForProducts {
  discount: string;
  rating: string;
  categories: string;
  price: string;
  color: string;
}

interface Props {
  setFilterForProducts: (filterObject: FilterForProducts) => void;
}

interface CheckBoxList {
  id: string;
  title: string;
  isChoosen: boolean;
}

const discountOfferList: CheckBoxList[] = [
  {
    id: '20',
    title: '20% Cashback Offer',
    isChoosen: false,
  },
  {
    id: '5',
    title: '5% Cashback Offer',
    isChoosen: false,
  },
  {
    id: '25',
    title: '25% Cashback Offer',
    isChoosen: false,
  },
];

const ratingItemList: CheckBoxList[] = [
  {
    id: '5',
    title: '5',
    isChoosen: false,
  },
  {
    id: '4',
    title: '4',
    isChoosen: false,
  },
  {
    id: '3',
    title: '3',
    isChoosen: false,
  },
  {
    id: '2',
    title: '2',
    isChoosen: false,
  },
  {
    id: '1',
    title: '1',
    isChoosen: false,
  },
];

const categoriesList: CheckBoxList[] = [
  {
    id: 'chair',
    title: 'Chair',
    isChoosen: false,
  },
  {
    id: 'couch',
    title: 'Couch',
    isChoosen: false,
  },
  {
    id: 'table',
    title: 'Table',
    isChoosen: false,
  },
  {
    id: 'clock',
    title: 'Clock',
    isChoosen: false,
  },
];

const priceList: CheckBoxList[] = [
  {
    id: '20',
    title: '$20 - $30',
    isChoosen: false,
  },
  {
    id: '30',
    title: '$30 - $40',
    isChoosen: false,
  },
  {
    id: '40',
    title: '$40 - $50',
    isChoosen: false,
  },
  {
    id: '50',
    title: '$50 - $60',
    isChoosen: false,
  },
  {
    id: '60',
    title: '$60 - $70',
    isChoosen: false,
  },
  {
    id: '70',
    title: '$70 - $80',
    isChoosen: false,
  },
  {
    id: '80',
    title: '$80 - $90',
    isChoosen: false,
  },
  {
    id: '90',
    title: '$90 - $100',
    isChoosen: false,
  },
  {
    id: '100',
    title: '$100 - $110',
    isChoosen: false,
  },
];

const colorsList: CheckBoxList[] = [
  {
    id: 'black',
    title: 'Black',
    isChoosen: false,
  },
  {
    id: 'white',
    title: 'White',
    isChoosen: false,
  },
  {
    id: 'blue',
    title: 'Blue',
    isChoosen: false,
  },
  {
    id: 'red',
    title: 'Red',
    isChoosen: false,
  },
  {
    id: 'grey',
    title: 'Grey',
    isChoosen: false,
  },
  {
    id: 'brown',
    title: 'Brown',
    isChoosen: false,
  },
];

const SideBar: React.FC<Props> = ({ setFilterForProducts }) => {
  const [discount, setDiscount] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [categories, setCategories] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilterForProducts({ discount, rating, categories, price, color });
    }, 500);

    return () => clearTimeout(timeout);
  }, [discount, rating, categories, price, color, setFilterForProducts]);

  return (
    <div className="w-[23%] py-2 flex flex-col items-start gap-10">
      {/* DISCOUNT OFFER */}
      <FilterComponent
        filterItems={discountOfferList}
        filterTitle={'Discount Offer'}
        isRating={false}
        isColor={false}
        value={discount}
        setValue={setDiscount}
        name={'discount'}
      />

      {/* Rating item */}
      <FilterComponent
        filterItems={ratingItemList}
        filterTitle={'Rating'}
        isRating={true}
        isColor={false}
        value={rating}
        setValue={setRating}
        name={'rating'}
      />

      {/* Categories */}
      <FilterComponent
        filterItems={categoriesList}
        filterTitle={'Categories'}
        isRating={false}
        isColor={false}
        value={categories}
        setValue={setCategories}
        name={'categories'}
      />

      {/* Price */}
      <FilterComponent
        filterItems={priceList}
        filterTitle={'Price'}
        isRating={false}
        isColor={false}
        value={price}
        setValue={setPrice}
        name={'price'}
      />

      {/* colors */}
      <FilterComponent
        filterTitle="Sort By Color"
        filterItems={colorsList}
        isRating={false}
        isColor={true}
        value={color}
        setValue={setColor}
        name={'colors'}
      />
    </div>
  );
};

export default React.memo(SideBar);
