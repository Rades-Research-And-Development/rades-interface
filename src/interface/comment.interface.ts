import { IUser } from './user.interface';
import { IArticle } from "./article.interface"
export interface IComment {
  body: string;
  author: IUser;
  createdAt: Date;
  article: IArticle;
}
