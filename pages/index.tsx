import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/Container'
import MoreStories from '../components/MoreStories'
import HeroPost from '../components/HeroPost'
import Intro from '../components/Intro'
import Layout from '../components/Layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Na Now News of ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 7,
  }
}

// Get the first 11 posts from WordPress, ordered by the date
export async function getAllPostsForWordPress(preview) {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 11, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            excerpt
            author
          }
        }
      }
    }
  `)
  return data.posts
}