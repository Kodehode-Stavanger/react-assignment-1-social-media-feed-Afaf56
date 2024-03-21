import Posts from "./Posts.jsx";
import posts from "./assets/posts.js";
import licon from "./assets/licon.jpg";

function Feed() {
  return (
    <>
      <h2>Social Media Feed</h2>
      <Posts posts={posts} licon={licon} />
    </>
  );
}
export default Feed;
