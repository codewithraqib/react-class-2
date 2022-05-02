import {
  AboutUs,
  Addresses,
  Cart,
  CategoryItems,
  Payment,
  Product,
  Shop,
  WelcomePage,
  Wishlist,
} from './';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome', component: WelcomePage, isIndex: true },
    { path: 'category/:items', component: CategoryItems, isIndex: false },
    { path: 'shop', component: Shop, isIndex: false },
    { path: 'product', component: Product, isIndex: false },
    { path: 'cart', component: Cart, isIndex: false },
    { path: 'addresses', component: Addresses, isIndex: false },
    { path: 'payment', component: Payment, isIndex: false },
    { path: 'wishlist', component: Wishlist, isIndex: false },
    { path: 'about-us', component: AboutUs, isIndex: false },
  ],
};
