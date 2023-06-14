import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing oke&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p> */}
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
        <header>
        <section className="bg-black">
  <div className="container px-4 mx-auto">
    <div className="flex items-center justify-between py-5">
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto pr-2">
            <a href="#">
            <Image src="/images/prj.jpeg" alt="Gambar Proyek" width={2} height={2} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto hidden lg:block">
            <ul className="flex items-center mr-8">
              <li className="mr-14 font-medium hover:text-gray-900 tracking-tight"><a href="#Home">Home</a></li>
              <li className="mr-14 font-medium hover:text-gray-900 tracking-tight"><a href="#Profile">Profile</a></li>
              <li className="mr-8 font-medium hover:text-gray-900 tracking-tight border-r pr-8"><a href="#Project">Project</a></li>
              <li className="font-medium hover:text-gray-900 tracking-tight"><a href="#">Customer Login</a></li>
            </ul>
          </div>
          <div className="w-auto hidden lg:block">
            <div className="inline-block"><a className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-red-600 rounded-lg focus:ring-4 focus:ring-indigo-800 transition duration-200" href="#">My Social Media</a></div>
          </div>
          <div className="w-auto lg:hidden">
            <a href="#">
              <svg className="navbar-burger text-indigo-600" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
    <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
      <div className="flex flex-wrap justify-between h-full">
        <div className="w-full">
          <div className="flex items-center justify-between -m-2">
            <div className="w-auto p-2">
              <a className="inline-block" href="#">
              <Image src="/images/ls.jpeg" alt="Gambar Proyek" width={500} height={300} />
              </a>
            </div>
            <div className="w-auto p-2">
              <a className="navbar-burger" href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-16 w-full">
          <ul>
            <li className="mb-12 font-medium hover:text-gray-900 tracking-tight"><a href="#">Home</a></li>
            <li className="mb-12 font-medium hover:text-gray-900 tracking-tight"><a href="#">Profile</a></li>
            <li className="mb-12 font-medium hover:text-gray-900 tracking-tight"><a href="#">Project</a></li>
            <li className="font-medium hover:text-gray-900 tracking-tight"><a href="#">Customer Login</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-end w-full pb-8"><a className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-200 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-green-700 transition duration-200" href="#">Try 14 Days Free Trial</a></div>
      </div>
    </nav>
  </div>
</section>
    </header>
    <br></br>
   
      </div>
    
       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
       {/* <Image src="/images/profil.jpeg" alt="Foto profil" width={500} height={300} /> */}
      

        
         {/* <section id="tentang">
        <h2 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">Profile</h2> 
        <br></br>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> A final year Computer Technology student graduate,
who love to learn something new about technology,
excellent problem solving skill, work well as a team,
and fast learner. Interested in frontend, backend,
fullstack, and Cloud Computing.</p>
        </section> */}
      </div> 
      <table>
  <tr>
    <th colSpan={2}><h2 className="top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">Profile</h2> 
        </th>
    <th></th>
  </tr>
  <tr>
    <td><Image src="/images/profil.jpeg" alt="Foto profil" width={500} height={300} /></td>
    <td> <p className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> A final year Computer Technology student graduate,
who love to learn something new about technology,
excellent problem solving skill, work well as a team,
and fast learner. Interested in frontend, backend,
fullstack, and Cloud Computing.</p></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><p className="top-0 flex w-full justify-center border-b " >Portofolio</p> </td>
    <td></td>
  </tr>
  <tr>
    <td><h2>Website Dormitory Del Institute of Technology</h2></td>
    <td> <Image src="/images/prj.jpg" alt="Gambar Proyek" width={250} height={300} />
           
            </td>
    <td><p>Deskripsi proyek 1.</p></td>
  </tr>
  <tr>
    <td>Website Attendence Linked to Googlesheet</td>
    <td><section className="relative py-20 md:py-32 overflow-hidden">
    {/* <Image src="/images/prj.jpg" alt="Gambar Proyek" width={250} height={300} /> */}
  <div className="relative container px-4 mx-auto">
    {/* <div className="text-center mb-18">
      <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">SOCIAL MEDIA</span>
      <h1 className="font-heading text-4xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-4">
        <span>Follow us on</span>
        <span className="font-serif italic">instagram</span>
      </h1>
      <p className="text-gray-500">Risus viverra justo sagittis vestibulum metus.</p>
    </div> */}
    <div className="relative max-w-sm sm:max-w-7xl mx-auto"><div className="px-6">
        <div className="flex -mx-4">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4">
            <a className="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div className="relative w-full h-72 mb-3">
                <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40">
                <Image src="/images/ls.jpeg" alt="Gambar Proyek" width={250} height={300} />                </div>
                <Image src="/images/ls.jpeg" alt="Gambar Proyek" width={550} height={500} />              </div>
              <span className="text-sm text-black">@saturn_ui</span>
            </a>
          </div>
          <div className="hidden sm:block w-full md:w-1/3 lg:w-1/4 px-4">
            <a className="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div className="relative w-full h-72 mb-3">
                <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40">
                <Image src="/images/ls.jpeg" alt="Gambar Proyek" width={250} height={300} />                </div>
                <Image src="/images/ls.jpeg" alt="Gambar Proyek" width={550} height={500} />              </div>
              <span className="text-sm text-black">@saturn_ui</span>
            </a>
          </div>
          <div className="hidden md:block md:w-1/3 lg:w-1/4 px-4">
            <a className="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div className="relative w-full h-72 mb-3">
                <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40">
                <Image src="/images/ls.jpeg" alt="Gambar Proyek" width={250} height={300} />                </div>
                <Image src="/images/ls.jpeg" alt="Gambar Proyek" width={550} height={500} />              </div>
              <span className="text-sm text-black">@saturn_ui</span>
            </a>
          </div>
          <div className="hidden lg:block lg:w-1/4 px-4">
            <a className="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div className="relative w-full h-72 mb-3">
                <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40">
                <Image src="/images/ls.jpeg" alt="Gambar Proyek" width={250} height={300} />              </div>
                <Image src="/images/ls.jpeg" alt="Gambar Proyek" width={550} height={500} />              </div>
              <span className="text-sm text-black">@saturn_ui</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section></td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
      <section id="proyek">
        
        <div>
          
        </div>
        {/* <button type="button"
          onClick="document.getElementById('demo').innerHTML = Date()">
        x`  Click me to display Date and Time.</button> */}

{/* <p id="demo"></p> */}
        
    </section>

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
       <footer>
        <p>Hak Cipta &copy; 2023 Portofolio Saya</p>
    </footer>
    </main>
  )
}
