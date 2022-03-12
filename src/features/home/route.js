import { SingleBlogItem, WelcomePage } from './';
import MainStructureComponent from './MainStructureComponent';
import Projects from './Projects';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome', component: WelcomePage, isIndex: true },
    { path: 'projects', component: Projects, isIndex: false },
    { path: 'blog', component: SingleBlogItem, isIndex: false },
  ],
};
