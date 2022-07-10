import {
  IComment,
  ICommentEvent,
  IEvent,
  IPost,
  TPostsQuery,
} from "@app/events"

export const posts: TPostsQuery = {}

export function handleEvent(event: IEvent) {
  if (event.type == "PostCreated") {
    const data = event.data as IPost
    posts[data.id] = {
      id: data.id,
      title: data.title,
      comments: [],
    }
  }
  if (event.type === "CommentCreated") {
    const data = event.data as ICommentEvent
    const post = posts[data.postId]
    const comment: IComment = {
      id: data.id,
      content: data.content,
      status: data.status,
    }
    post.comments.push(comment)
  }

  if (event.type === "CommentUpdated") {
    const data = event.data as ICommentEvent
    const post = posts[data.postId]
    const comment = post.comments.find((c) => c.id === data.id)
    comment.status = data.status
    comment.content = data.content
  }
}
