import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <Container>
      <div className="alert border-info text-sm lg:text-base mt-2">
        {preview ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="sm:block hidden stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>
              This is a page preview.{" "}
              <a
                href="/api/exit-preview"
                className="text-primary hover:text-secondary"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="sm:block hidden stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>
              The B2B information for this blog is written in the{" "}
              <a
                href={`${EXAMPLE_PATH}`}
                target="_blank"
                className="text-primary hover:text-secondary"
              >
                Green Print of BANANOW
              </a>
              .
            </span>
          </>
        )}
      </div>
    </Container>
  );
}
