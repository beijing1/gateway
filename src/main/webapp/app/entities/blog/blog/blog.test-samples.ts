import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 876,
  name: 'geez sweetly communicant',
  handle: 'goldfish up',
};

export const sampleWithPartialData: IBlog = {
  id: 8962,
  name: 'before past',
  handle: 'during',
};

export const sampleWithFullData: IBlog = {
  id: 24741,
  name: 'sans brr',
  handle: 'overburden',
};

export const sampleWithNewData: NewBlog = {
  name: 'sweeps woot yum',
  handle: 'in usefully',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
