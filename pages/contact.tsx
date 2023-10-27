import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import Header from '../components/header'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Contact({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Contact Na Now News Now! | ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Header />
        <>
        <section className="flex flex-col sm:flex-row items-center sm:justify-between mt-8 mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold sm:text-left text-center tracking-tighter">
                Contact Na Now News...
            </h1>
            <h4 className="text-center sm:text-right text-sm lg:text-base mt-5">
                Slow but surely updated by the{' '}
                <a
                    href="https://www.bananow.land/#farmers"
                    target="_blank"
                    className="link link-secondary"
                >
                    Farmers
                </a>{' '}
                of{' '}
                <a
                    href={CMS_URL}
                    target="_blank"
                    className="link link-secondary"
                >
                {CMS_NAME}
                </a>
                .
            </h4>
        </section>
        </>
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

// // Get the first 11 posts from WordPress, ordered by the date
// export async function getAllPostsForWordPress(preview) {
//   const data = await fetchAPI(`
//     query AllPosts {
//       posts(first: 11, where: { orderby: { field: DATE, order: DESC } }) {
//         edges {
//           node {
//             title
//             slug
//             date(formatString: "MMMM DD, YYYY")
//             excerpt
//             author
//           }
//         }
//       }
//     }
//   `)
//   return data.posts
// }