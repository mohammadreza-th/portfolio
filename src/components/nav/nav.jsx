
function nav() {
  return (
    <nav className="rounded-t-lg flex flex-row bg-sky-900 justify-around ">
        <a
          href="./"
          className="text-white bg-sky-600 px-2
          py-1 m-1 rounded"
        >
          Home
        </a>
        <a
          href="./about"
          className="text-white hidden sm:block bg-sky-600 px-2
          py-1 m-1 rounded"
        >
          About
        </a>
        <a
          href="./projects"
          className="text-white bg-sky-600 px-2
          py-1 m-1 rounded"
        >
          projects
        </a>

        <a
          href="./contact"
          className="text-white bg-sky-600 px-2
          py-1 m-1 rounded hidden sm:block"
        >
          Contact
        </a>
    </nav>
  );
}

export default nav;
