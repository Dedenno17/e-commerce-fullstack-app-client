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
  accesToken: string;
}

// type data product
export interface Product {
  _id: string;
  title: string;
  description: string;
  img: string;
  categories: string[];
  colors: string[];
  price: number;
  favourite: number;
  rating: number;
  createdAt: Date;
  info: {} | null;
}

// type products cart
export interface CartProducts {
  productsId: string;
  title: string;
  color: string;
  image: string;
  price: number;
  quantity: number;
}

// type Cart
export interface Cart {
  userId: string;
  products: CartProducts[];
  totalPrice: number;
}

// type blog
export interface Blog {
  _id: string;
  title: string;
  atuhor: string;
  content: string;
  img: string;
  categories: string[];
  createdAt: any;
}
