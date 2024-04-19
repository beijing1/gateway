import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'gatewayApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'blog',
    data: { pageTitle: 'gatewayApp.blogBlog.home.title' },
    loadChildren: () => import('./blog/blog/blog.routes'),
  },
  {
    path: 'post',
    data: { pageTitle: 'gatewayApp.blogPost.home.title' },
    loadChildren: () => import('./blog/post/post.routes'),
  },
  {
    path: 'tag',
    data: { pageTitle: 'gatewayApp.blogTag.home.title' },
    loadChildren: () => import('./blog/tag/tag.routes'),
  },
  {
    path: 'product',
    data: { pageTitle: 'gatewayApp.storeProduct.home.title' },
    loadChildren: () => import('./store/product/product.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
