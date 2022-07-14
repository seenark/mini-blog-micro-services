import { atom, useAtom } from 'jotai'
import type { NextPage } from 'next'
import getConfig from 'next/config'
import Head from 'next/head'
import Image from 'next/image'
import CreatePost from '../components/CreatePost'
import PostList from '../components/PostList'
import styles from '../styles/Home.module.css'

export const postsUrlAtom = atom("")
export const queryUrlAtom = atom("")
export const commentsUrlAtom = atom("")

interface IHomeProps {
  postsUrl: string
  commentsUrl: string
  queryUrl: string
}

const Home: NextPage<IHomeProps> = (props) => {
  console.log("props", props)
  const [postsUrl, setPostUrl] = useAtom(postsUrlAtom)
  const [commentsUrl, setCommentsUrl] = useAtom(commentsUrlAtom)
  const [queryUrl, setQueryUrl] = useAtom(queryUrlAtom)

  setPostUrl(props.postsUrl)
  setCommentsUrl(props.commentsUrl)
  setQueryUrl(props.queryUrl)

  return (
    <div className="container mx-auto">
      <h1 className=" text-[30px]">Create Post!!!</h1>
      <CreatePost />
      <hr className=" my-3" />
      <h1 className="text-[30px]">Post Lists</h1>
      <PostList />
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const { publicRuntimeConfig } = getConfig()
  return {
    postsUrl: publicRuntimeConfig.POSTS_API_URL,
    commentsUrl: publicRuntimeConfig.COMMENTS_API_URL,
    queryUrl: publicRuntimeConfig.QUERY_API_URL
  }
}

export default Home
