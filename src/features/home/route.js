import { Gallery, SingleBlogItem, WelcomePage } from './';
import Blogs from './Blogs';
import Projects from './Projects';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome', component: WelcomePage, isIndex: true },
    { path: 'projects', component: Projects, isIndex: false },
    { path: 'blogs', component: Blogs, isIndex: false },
    { path: 'blog', component: SingleBlogItem, isIndex: false },
    { path: 'gallery', component: Gallery, isIndex: false },
  ],
};
