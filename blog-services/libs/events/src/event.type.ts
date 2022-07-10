export interface IPost {
  id: string
  title: string
}

export interface IComment {
  id: string
  content: string
  status: "pending" | "rejected" | "approved"
}

export interface ICommentEvent extends IComment {
  postId: string
}

export type TEvent =
  | "PostCreated"
  | "CommentCreated"
  | "CommentModerated"
  | "CommentUpdated"
export type TCommentsByPostsId = { [key: string]: IComment[] }
export interface IEvent<T = TEvent> {
  type: TEvent
  data: T extends "PostCreated"
    ? IPost
    : T extends "CommentCreated"
    ? ICommentEvent
    : T extends "CommentUpdated"
    ? ICommentEvent
    : ICommentEvent
}

export interface IPostsQeury {
  id: string
  title: string
  comments: IComment[]
}

export type TPostsQuery = { [key: string]: IPostsQeury }
