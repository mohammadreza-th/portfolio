import Nav from "../nav/nav";

function layout({ children }) {
  return (
    <div className="container bg-sky-200 mx-auto px-5 py-5 h-fit">
      <header className="px-0">
        <Nav></Nav>
      </header>
      <main className="bg-white">{children}</main>
      <footer className="bg-sky-900 rounded-b-lg text-white text-center" >@2023 </footer>
    </div>
  );
}

export default layout;
