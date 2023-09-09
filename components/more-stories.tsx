import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-4 md:block hidden md:text-5xl font-bold">
        More Stories
      </h2>
      <div className="grid grid-cols-1 gap-y-10 mb-10 md:grid-cols-2 md:gap-x-10 md:gap-y-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
