
export interface IUser {
  email?: string;
  username: string;
  bio?: string;
  image?: string;
  publicKey?: string;
  following: IUser[];
  follower: IUser[];
}


export interface IProfile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
