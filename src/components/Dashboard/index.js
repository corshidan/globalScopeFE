import "./Dashboard.css"

export default function Dashboard() {
  return (
    <section className="blog-box">
      <div className="blog-box-add">
        <a href="/bloginputpage">
          <h1>Add to Blog</h1>
          <img src="" alt="blog"></img>
        </a>
      </div>
      <div className="blog-box-recap">
        <a href="/blogrecappage">
          <h1>Blog Recap</h1>
          <img src="" alt="recap"></img>
        </a>
      </div>
      <div className="blog-box-stats">
        <a href="/statspage">
          <h1>See your stats</h1>
          <img src="" alt="stats"></img>
        </a>
      </div>
      <div className="blog-box-list">
        <a href="/list">
          <h1>To do list</h1>
          <img src="" alt="list"></img>
        </a>
      </div>
    </section>
  );
}
