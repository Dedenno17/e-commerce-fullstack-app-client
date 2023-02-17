import { Product } from '../Types';

// sort by price
export const compareByPrice = (a: Product, b: Product): number => {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  }
  return 0;
};

// sort by rating
export const compareByRating = (a: Product, b: Product): number => {
  if (a.rating < b.rating) {
    return -1;
  } else if (a.rating > b.rating) {
    return 1;
  }
  return 0;
};

// sort by date
export const compareByDate = (a: Product, b: Product): number => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);

  if (dateA > dateB) {
    return -1;
  } else if (dateA < dateB) {
    return 1;
  }
  return 0;
};
