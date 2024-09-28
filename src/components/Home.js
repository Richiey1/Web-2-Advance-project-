import React from "react";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Home Feed</h2>
      <div className="post">
        <h3>Temitope Olubire</h3>
        <p>I'm leading a protest, and you have to join me so we can win!</p>
        <button>Like</button>
        <button>Comment</button>
        <button>Repost</button>
      </div>
      <div className="post">
          <h2>AWS Training & Certification</h2>
          <p>1 week ago</p>
          <p>AWS is launching free training to help you build in-demand skills.</p>
          <img
            src="https://media.licdn.com/media/AAYQAQQSAAgAAQAAAAAAABgBrZ2daanMQJ-egBdqUfzcNg.gif"
            loading="lazy"
            height="600"
            alt=""
            id="ember713"
            className="ivm-view-attr__img--centered ivm-view-attr__img  feed-shared-celebration-image__image evi-image lazy-image ember-view"
          />
          <button>Like</button>
          <button>Comment</button>
          <button>Repost</button>
        </div>
    </div>
  );
}

export default Home;
