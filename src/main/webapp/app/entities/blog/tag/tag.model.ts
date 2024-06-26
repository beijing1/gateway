import { IPost } from 'app/entities/blog/post/post.model';

export interface ITag {
  id: number;
  name?: string | null;
  posts?: IPost[] | null;
}

export type NewTag = Omit<ITag, 'id'> & { id: null };
