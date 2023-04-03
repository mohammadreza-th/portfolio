function Card({ link, imgSource, title, children }) {
  return (
    <div className="mx-3 bg-white min-w-[280px] w-72 rounded-lg hover:scale-110 duration-100">
      <a href={link} target="blank">
        <img src={imgSource} className="rounded-t-lg" />
        <div className="px-5 py-2">
          <h3 className="text-xl font-bold text-sky-800 ">{title}</h3>
          <p className="px-5 m-3 text-sky-800">{children}</p>
        </div>
      </a>
    </div>
  );
}
export default Card;
