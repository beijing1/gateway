import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 31506,
  name: 'for ack',
};

export const sampleWithPartialData: ITag = {
  id: 12882,
  name: 'pickaxe optimistic yum',
};

export const sampleWithFullData: ITag = {
  id: 9907,
  name: 'eek',
};

export const sampleWithNewData: NewTag = {
  name: 'hence manhandle',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
