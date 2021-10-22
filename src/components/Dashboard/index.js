import "./Dashboard.css";

export default function Dashboard() {
  return (
    <section className="blog-box">
      <div class="container">
        <div class="testimonial-card1">
          <div class="text"></div>
          <div class="footer">
            <div class="image"></div>
            <a href="/bloginputpage">
              <h3 class="person">Add to your blog</h3>
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="testimonial-card2">
          <div class="text"></div>
          <div class="footer">
            <div class="image"></div>
            <a href="/blogrecappage">
              <h3 class="person">Blog Recap</h3>
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="testimonial-card3">
          <div class="text"></div>
          <div class="footer">
            <div class="image"></div>
            <a href="/statspage">
              <h3 class="person">See your stats</h3>
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="testimonial-card4">
          <div class="text"></div>
          <div class="footer">
            <div class="image"></div>
            <a href="/listpage">
              <h3 class="person">To do list</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
