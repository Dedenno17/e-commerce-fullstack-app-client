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
  _id: string;
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

// type comment for blog
export interface commentBlog {
  _id: string;
  userId: string;
  username: string;
  image: string | null;
  value: string;
  date: string;
}

// type blog
export interface Blog {
  _id: string;
  title: string;
  atuhor: string;
  content: string;
  img: string;
  categories: string[];
  comments: commentBlog[];
  createdAt: any;
}

// type related products
export interface RelatedProducts {
  _id: string;
  productId: string;
  relatedProducts: Product[];
}

// type response payment intent
export interface paymentIntent {
  id: string;
  object: string;
  amount: number;
  amount_capturable: number;
  amount_details: {
    tip: object;
  };
  amount_received: number;
  application: null | string;
  application_fee_amount: null | number;
  automatic_payment_methods: {
    enabled: boolean;
  };
  canceled_at: null | string;
  cancellation_reason: null | string;
  capture_method: string;
  client_secret: string;
  confirmation_method: string;
  created: number;
  currency: string;
  customer: null | string;
  description: null | string;
  invoice: null | string;
  last_payment_error: null | string;
  latest_charge: null | number;
  livemode: boolean;
  metadata: object;
  next_action: null;
  on_behalf_of: null;
  payment_method: null;
  payment_method_options: object;
  payment_method_types: string[];
  processing: null;
  receipt_email: null | string;
  redaction: null;
  review: null;
  setup_future_usage: null;
  shipping: null | number;
  statement_descriptor: null | string;
  statement_descriptor_suffix: null | string;
  status: string;
  transfer_data: null;
  transfer_group: null;
}

// type product order
export interface OrderProduct {
  productId: string;
  title: string;
  color: string;
  image: string;
  price: number;
  quantity: number;
}

// type order
export interface Order {
  userId: string;
  products: OrderProduct[];
  status: string;
  totalPrice: number;
}

// type of wishlist product
export interface WishlistProduct {
  title: string;
  color: string;
  price: number;
  image: string;
  quantity: number;
  _id: string;
}

// type of wishlist
export interface Wishlist {
  _id?: string;
  userId: string;
  products: WishlistProduct[];
  createdAt?: string;
  updatedAt?: string;
}
