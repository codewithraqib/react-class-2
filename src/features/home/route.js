import { Cart, CategoryItems, Product, Shop, WelcomePage } from './';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome', component: WelcomePage, isIndex: true },
    { path: 'category/:items', component: CategoryItems, isIndex: false },
    { path: 'shop', component: Shop, isIndex: false },
    { path: 'product', component: Product, isIndex: false },
    { path: 'cart', component: Cart, isIndex: false },
  ],
};
