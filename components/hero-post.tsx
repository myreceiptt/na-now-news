import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-6">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-10 mb-10">
        <div>
          <h3 className="mb-4 text-2xl lg:text-3xl font-bold">
            <Link
              href={`/posts/${slug}`}
              className="link link-primary no-underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div className="mb-4 md:mb-0 text-sm lg:text-base text-accent">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="text-sm lg:text-base mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  )
}
