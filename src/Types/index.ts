// type data register
export interface Register {
  username: string;
  email: string;
  password: string;
}

// type data login
export interface Login {
  username: string;
  password: string;
}

// type data user
export interface User {
  others: {
    address: string;
    city: string;
    country: string;
    createdAt: string;
    email: string;
    isAdmin: boolean;
    picture: null;
    updatedAt: string;
    username: string;
    __v: number;
    _id: string;
  };
  accessToken: string;
}

// type data product
export interface Product {
  _id: string;
  title: string;
  description: string;
  img: string;
  categories: [];
  colors: [];
  price: number;
  favourite: number;
  info: {} | null;
}
