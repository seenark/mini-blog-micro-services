import axios from 'axios';
import * as React from 'react';

interface ICommentCreateProps {
    postId:string
}

const CommentCreate: React.FunctionComponent<ICommentCreateProps> = ({postId}) => {
  const [content, setContent] = React.useState("")
  
  const onSubmit = React.useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = `http://localhost:4001/post/${postId}/comments`
    const res = await axios.post(url, {
      content
    })
    setContent("")
  }, [content, postId])

  return (
    <div>
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
            <label htmlFor="cm">New Comment</label>
            <input type="text" className="border border-gray-300" value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit" className="py-2 px-4 border border-gray-400 rounded-lg">Submit</button>
        </form>
    </div>
  );
};

export default CommentCreate;
