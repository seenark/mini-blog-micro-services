
export interface IComment {
    id: string;
    content: string;
    status: "pending" | "rejected" | "approved"
  }
  
  export type TCommentsByPostsId = { [key: string]: IComment[] };

interface ICommentListProps {
    comments: IComment[]
}

const CommentList: React.FunctionComponent<ICommentListProps> = ({comments}) => {
    
    const renderedComments = comments.map(comment => {
       let content = ""
       if (comment.status === "pending") {
        content = "This comment is awaiting moderation"
       }
       if (comment.status === "rejected") {
        content = "This comment has been rejected"
       }
       if (comment.status === "approved") {
        content = comment.content
       }
    return <li key={comment.id}>{content}</li>
   })

  return (
    <ul className=" list-disc px-8">
        {renderedComments}
    </ul>
  );
};

export default CommentList;
