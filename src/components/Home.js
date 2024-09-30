import React from "react";

function Home() {
  return (
    <div className="home">
        <aside className="left-aside">
            <h2>Left Aside</h2>
            <ul>
                <li>Menu item 1</li>
                <li>Menu item 2</li>
                <li>Menu item 3</li>
            </ul>
        </aside>
      <div className="post-container">
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
        <div className="post">
        <h2>Temitope Olubire</h2>
          <p>4 days ago</p>
          <p>I'm leading a protest, and you have to join me so we can win!</p>
          <img
            src="https://media.licdn.com/dms/image/v2/D4E22AQGkf003DttjGg/feedshare-shrink_800/feedshare-shrink_800/0/1726472759722?e=1729728000&amp;v=beta&amp;t=Os3hzcTMJAqLe7Qz7-mqzrq9kOyegBftYWIndD_ATpI"
            loading="lazy"
            height="600"
            alt="Image preview"
            id="ember219"
            className="ivm-view-attr__img--centered ivm-view-attr__img  feed-shared-celebration-image__image evi-image lazy-image ember-view"
          />
          <button>Like</button>
          <button>Comment</button>
          <button>Repost</button>
        </div>
        </div>      
        <aside className="right-aside">
            <h2>Right Aside</h2>
            <ul>
                <li>Trending topics</li>
                <li>Popular posts</li>
                <li>Recommended users</li>
            </ul>
        </aside>              
    </div>
  );
}

export default Home;
