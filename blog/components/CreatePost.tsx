import axios from "axios";
import { FormEvent, useCallback, useState } from "react";

interface ICreatePostProps {
}

const CreatePost: React.FunctionComponent<ICreatePostProps> = (props) => {

    const [title, setTitle] = useState("")

    const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const url = `http://localhost:4000/post`
        const res = await axios.post(url, {
            title
        })
        setTitle("")
    }, [title])

    return (
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
           
            <div className="flex flex-col">
                <label htmlFor="title" className="">Title</label>
                <input type="text" id="title" value={title} onInput={(e) => setTitle(e.currentTarget.value)} className="border border-gray-700" />
            </div>
            <div>
                <button className="border rounded-lg px-4 py-2 bg-blue-300">Submit</button>
            </div>
        </form>
    );
};

export default CreatePost;
