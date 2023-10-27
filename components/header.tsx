import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/" className="hover:underline">
    //     Na Now News
    //   </Link>
    //   .
    // </h2>
    <div className="navbar bg-base-100">
      <div className="flex-1">
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-square btn-xs sm:btn-sm md:btn-md lg:btn-lg avatar">
        <div className="rounded p-1 ">
          <img src="/images/logos/BananowLogo-169x121.png" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl"
          aria-label="Home"
        >
          <Image
            src="/images/logos/BananowLogo-169x121.png"
            alt="Na Now News"
            width="100"
            height="100"
          />
          <span>Na Now News</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/about"
              className=""
            >
              <span>About</span>
            </Link>
          </li>
          <li>
            <details className="dropdown dropdown-bottom dropdown-end">
              <summary>
                Categories
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a href="/categories/vibes">90's Vibes</a></li>
                <li><a href="/categories/dermaga">Dermaga Web3</a></li>
                <li><a href="/categories/class">Class Now</a></li>
                <li><a href="/categories/inamotion">InAMotion</a></li>
                <li><a href="/categories/delegate">Agent Now</a></li>
                <li><a href="/categories/professor">NOTA's Dept.</a></li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              href="/contact"
              className=""
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
