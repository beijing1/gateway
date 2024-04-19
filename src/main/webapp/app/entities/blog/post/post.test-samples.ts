import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 9930,
  title: 'incidentally reassuringly more',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-04-19T11:27'),
};

export const sampleWithPartialData: IPost = {
  id: 32247,
  title: 'retain lean out',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-04-18T23:39'),
};

export const sampleWithFullData: IPost = {
  id: 18651,
  title: 'for',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-04-19T02:41'),
};

export const sampleWithNewData: NewPost = {
  title: 'clearly imaginary',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-04-19T08:43'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
