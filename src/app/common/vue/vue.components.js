
import Screen from './Screen';
import ScreenFooter from './ScreenFooter';
import ScreenHeader from './ScreenHeader';
import Hero from './Hero';

export default {
  Screen,
  ScreenFooter,
  ScreenHeader,
  Hero,
  'forward-button': () => import(/* webpackChunkName: "forward-button" */'./ForwardButton'),
  'global-navigation': () => import(/* webpackChunkName: "global-navigation" */'./GlobalNavigation'),
  'global-navigation-underlay': () => import(/* webpackChunkName: "global-navigation-underlay" */'./GlobalNavigationUnderlay'),
  'heading': () => import(/* webpackChunkName: "heading" */'./Heading'),
  'news-section': () => import(/* webpackChunkName: "news-section" */'./NewsSection'),
  'news': () => import(/* webpackChunkName: "news" */'./News'),
  'site-search': () => import(/* webpackChunkName: "site-search" */'./SiteSearch'),
  'site-search-underlay': () => import(/* webpackChunkName: "site-search-underlay" */'./SiteSearchUnderlay'),
};
