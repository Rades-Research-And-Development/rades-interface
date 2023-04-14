import { IUser } from './user.interface';
import { IComment } from './comment.interface';


export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  medias?: [string];
  tagList?: [string];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: IUser;
  comments: IComment[]
}


export interface IQuery {
  tagList: { $in: any[] };
  author: string;
  _id: { $in: any[] };
}
