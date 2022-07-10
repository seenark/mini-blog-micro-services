import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CreatePost from '../components/CreatePost'
import PostList from '../components/PostList'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
       <h1 className=" text-[30px]">Create Post</h1>
      <CreatePost />
      <hr className=" my-3"/>
      <h1 className="text-[30px]">Post Lists</h1>
      <PostList />
    </div>
  )
}

export default Home
