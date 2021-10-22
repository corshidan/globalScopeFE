import "./BlogInputPage.css";

export default function BlogInputPage() {
  return (
    <section>
      <p>
        What have you covered since last time? Rate your confidence for each
        from 1-5:
      </p>
      <div className="topic-container">
        <input type="text" placeholder="topic1" />
        <form>
          <label for="quantity"></label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
          ></input>
          <input type="submit" value="Submit" />
        </form>
        <input type="text" placeholder="topic2" />
        <form>
          <label for="quantity"></label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
          ></input>
          <input type="submit" value="Submit" />
        </form>
        <input type="text" placeholder="topic3" />
        <form>
          <label for="quantity"></label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
          ></input>
          <input type="submit" value="Submit" />
        </form>
        <input type="text" placeholder="topic4" />
        <form>
          <label for="quantity"></label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <p>
        How confident do you feel about what you learned since last reflection?
      </p>
      <form>
        <p>1 2 3 4 5</p>
        <input type="range" min="0" max="5" step="1" />
      </form>
      <p>What do you want to work on/ what did not go well?</p>
      <input type="text" placeholder="To work on" />
      <p>Space for thoughts:</p>
      <input type="text" placeholder="Add to blog" />
    </section>
  );
}
