import NavbarItem from 'app/layouts/navbar/navbar-item.model';

export const EntityNavbarItems: NavbarItem[] = [
  {
    name: 'Blog',
    route: '/blog',
    translationKey: 'global.menu.entities.blogBlog',
  },
  {
    name: 'Post',
    route: '/post',
    translationKey: 'global.menu.entities.blogPost',
  },
  {
    name: 'Tag',
    route: '/tag',
    translationKey: 'global.menu.entities.blogTag',
  },
  {
    name: 'Product',
    route: '/product',
    translationKey: 'global.menu.entities.storeProduct',
  },
];
