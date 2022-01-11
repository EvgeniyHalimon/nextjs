import { GetStaticPaths } from 'next'
import Head from "next/head";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.API_HOST}/posts/`)
  const data = await response.json()

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() }
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`${process.env.API_HOST}/posts/${id}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data },
  }
}

const Post = ({ post }) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <PostInfo post={post} />
  </>
)

export default Post