import Layout from "../Layout";

export default function BlogInputPage() {
  return (
    <Layout>
      <form className="border-2 m-5 container">
        <div className="flex flex-col border-2 p-2">
          <label for="topics-section" className="m-2">
            What topics have you covered since you were last here? Rate your
            confidence for each from 1-5:
          </label>
          <div className="flex">
            <div className="flex">
              <label for="topicOne" className="m-2"></label>
              <input
                id="topicOne"
                name="topicOne"
                list="topics"
                placeholder="The first topic was..."
              />
              <label htmlFor="ratingTopicOne"></label>
              <input
                type="number"
                id="ratingTopicOne"
                name="ratingTopicOne"
                min="1"
                max="5"
              ></input>
            </div>
            <div className="flex">
              <label for="topicTwo" className="m-2"></label>
              <input
                id="topicTwo"
                name="topicTwo"
                list="topics"
                placeholder="And..."
              />
              <label for="ratingTopicTwo"></label>
              <input
                type="number"
                id="ratingTopicTwo"
                name="ratingTopicTwo"
                min="1"
                max="5"
              ></input>
            </div>

            <div className="flex">
              <label for="topicThree" className="m-2"></label>
              <input
                id="topicThree"
                name="topicThree"
                list="topics"
                placeholder="Also..."
              />
              <label htmlFor="ratingTopicThree"></label>
              <input
                type="number"
                id="ratingTopicThree"
                name="ratingTopicThree"
                min="1"
                max="5"
              ></input>
            </div>

            <div className="flex">
              <label for="topicFour" className="m-2"></label>
              <input
                id="topicFour"
                name="topicFour"
                list="topics"
                placeholder="Wait, I nearly forgot..."
              />
              <label htmlFor="ratingTopicFour"></label>
              <input
                type="number"
                id="ratingTopicFour"
                name="ratingTopicFour"
                min="1"
                max="5"
              ></input>
            </div>
          </div>
        </div>
        <datalist id="topics">
          <option value="JS"></option>
        </datalist>

        <div className="flex flex-col border-2 p-2">
          <label for="confidence-range" className="m-2">
            How confident do you feel about what you've learned since your last
            reflection?
          </label>
          <div className="w-1/4">
            <input
              className=" range range-neutral m-2"
              id="confidence-range"
              type="range"
              min="1"
              max="5"
              step="1"
            />
            <div class="flex text-sm text-gray-600 m-2 pl-3">
              <span class="w-8 text-left">1</span>
              <span class="w-8 text-justify">2</span>
              <span class="w-8 text-justify">3</span>
              <span class="w-8 text-justify">4</span>
              <span class="w-8 text-right">5</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-2 p-2">
          <label for="improvements" className="m-2">
            What could have gone better / What areas would you like to improve?
          </label>
          <textarea
            className="textarea h-24 textarea-bordered textarea-primary m-2"
            id="improvements"
            name="improvements"
            placeholder="Enter your thoughts here..."
            rows="6"
            cols="50"
          ></textarea>
        </div>

        <div className="flex flex-col border-2 p-2">
          <label for="add-thoughts" className="m-2">
            Any other thoughts?:
          </label>
          <textarea
            className="textarea h-24 textarea-bordered textarea-primary m-2"
            id="add-thoughts"
            name="add-thoughts"
            placeholder="I've run out of peanut butter..."
            rows="6"
            cols="50"
          />
        </div>
        <button className="btn btn-sm btn-glass float-right m-4">Post</button>
      </form>
    </Layout>
  );
}
