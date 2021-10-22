import "./BlogInputPage.css";

export default function BlogInputPage() {
  return (
    <section>
      <p>
        What have you covered since last time? Rate your confidence for each
        from 1-5:
      </p>
      <div className="topic-container">
        <input type="text" placeholder="topic1"></input>
        <form>
          <label for="quantity"></label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
        <input type="text" placeholder="topic2"></input>
        <form>
          <label for="quantity"></label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
        <input type="text" placeholder="topic3"></input>
        <form>
          <label for="quantity"></label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
        <input type="text" placeholder="topic4"></input>
        <form>
          <label for="quantity"></label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <p>Space for thoughts:</p>
      <input type="text" placeholder="Add to blog"></input>
    </section>
  );
}
