import React, { ReactNode, useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import FilterComponent from './FilterComponent';

interface CheckBoxList {
  id: string;
  title: string;
}

const productBrandList: CheckBoxList[] = [
  {
    id: 'coaster',
    title: 'Coaster Furniture',
  },
  {
    id: 'fusion',
    title: 'Fusion Dot High Fashion',
  },
  {
    id: 'unique',
    title: 'Unique Furniture Restore',
  },
  {
    id: 'dream',
    title: 'Dream Furniture Flipping',
  },
  {
    id: 'young',
    title: 'Young Repurposed',
  },
  {
    id: 'green',
    title: 'Green DIY Furniture',
  },
];

const discountOfferList: CheckBoxList[] = [
  {
    id: '20%',
    title: '20% Cashback Offer',
  },
  {
    id: '5%',
    title: '5% Cashback Offer',
  },
  {
    id: '25%',
    title: '25% Cashback Offer',
  },
];

const ratingItemList: CheckBoxList[] = [
  {
    id: '4000',
    title: '4000',
  },
  {
    id: '3000',
    title: '3000',
  },
  {
    id: '2000',
    title: '2000',
  },
];

const categoriesList: CheckBoxList[] = [
  {
    id: 'prestashop',
    title: 'Prestashop',
  },
  {
    id: 'magento',
    title: 'Magento',
  },
  {
    id: 'bigCommerce',
    title: 'BigCommerce',
  },
  {
    id: 'osCommerce',
    title: 'osCommerce',
  },
  {
    id: 'bags',
    title: 'Bags',
  },
  {
    id: 'watches',
    title: 'Watches',
  },
];

const priceList: CheckBoxList[] = [
  {
    id: '20',
    title: '$20 - $30',
  },
  {
    id: '30',
    title: '$30 - $40',
  },
  {
    id: '40',
    title: '$40 - $50',
  },
  {
    id: '50',
    title: '$50 - $60',
  },
  {
    id: '60',
    title: '$60 - $70',
  },
  {
    id: '70',
    title: '$70 - $80',
  },
  {
    id: '80',
    title: '$80 - $90',
  },
  {
    id: '90',
    title: '$90 - $100',
  },
  {
    id: '100',
    title: '$100 - $110',
  },
];

const colorsList: CheckBoxList[] = [
  {
    id: 'black',
    title: 'Black',
  },
  {
    id: 'white',
    title: 'White',
  },
  {
    id: 'blue',
    title: 'Blue',
  },
  {
    id: 'red',
    title: 'Red',
  },
  {
    id: 'grey',
    title: 'Grey',
  },
  {
    id: 'brown',
    title: 'Brown',
  },
];

interface FilterForProducts {
  brand: string;
  discount: string;
  rating: string;
  categories: string;
  price: string;
  color: string;
}

const SideBar: React.FC = () => {
  const [filterForProducts, setFilterForProducts] = useState<FilterForProducts>(
    {
      brand: '',
      discount: '',
      rating: '',
      categories: '',
      price: '',
      color: '',
    }
  );

  const [brand, setBrand] = useState<string>('');
  const [discount, setDiscount] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [categories, setCategories] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [color, setColor] = useState<string>('');

  return (
    <div className="w-[23%] py-2 flex flex-col items-start gap-10">
      {/* PRODUCT BRAND FILTER */}
      <FilterComponent
        filterItems={productBrandList}
        filterTitle={'Product Brand'}
        isRating={false}
        isColor={false}
        setValue={setBrand}
      />

      {/* DISCOUNT OFFER */}
      <FilterComponent
        filterItems={discountOfferList}
        filterTitle={'Discount Offer'}
        isRating={false}
        isColor={false}
        setValue={setDiscount}
      />

      {/* Rating item */}
      <FilterComponent
        filterItems={ratingItemList}
        filterTitle={'Rating'}
        isRating={true}
        isColor={false}
        setValue={setRating}
      />

      {/* Categories */}
      <FilterComponent
        filterItems={categoriesList}
        filterTitle={'Categories'}
        isRating={false}
        isColor={false}
        setValue={setCategories}
      />

      {/* Price */}
      <FilterComponent
        filterItems={priceList}
        filterTitle={'Price'}
        isRating={false}
        isColor={false}
        setValue={setPrice}
      />

      {/* colors */}
      <FilterComponent
        filterTitle="Sort By Color"
        filterItems={colorsList}
        isRating={false}
        isColor={true}
        setValue={setColor}
      />
    </div>
  );
};

export default React.memo(SideBar);
