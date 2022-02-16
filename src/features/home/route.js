import { WelcomePage } from './';
import Projects from './Projects';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome-page', component: WelcomePage, isIndex: true },
    { path: 'projects', component: Projects, isIndex: false },
  ],
};
