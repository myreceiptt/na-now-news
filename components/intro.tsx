import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <>
      <section className="flex flex-col sm:flex-row items-center sm:justify-between mt-8 mb-8">
        <h1 className="text-5xl md:text-6xl font-bold sm:text-left text-center tracking-tighter">
          Na Now News
        </h1>
        <h4 className="text-center sm:text-right text-lg mt-5">
          Slow but surely updated by the{' '}
          <a
            href="https://www.bananow.land/#farmers"
            target="_blank"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Farmers
          </a>{' '}
          of{' '}
          <a
            href={CMS_URL}
            target="_blank"
            className="underline hover:text-success duration-200 transition-colors"
          >
            {CMS_NAME}
          </a>
          .
        </h4>
      </section>
    </>
  )
}
