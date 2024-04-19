import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 15682,
  title: 'safely optimistically beg',
  price: 21462.31,
};

export const sampleWithPartialData: IProduct = {
  id: 24617,
  title: 'wonderfully hacienda',
  price: 28774.23,
};

export const sampleWithFullData: IProduct = {
  id: 1846,
  title: 'minus boon for',
  price: 25804.29,
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  title: 'annually whereas',
  price: 24203.73,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
