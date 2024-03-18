import Posts from "./Posts.jsx";
import posts from "./assets/posts.js";
import licon from "./assets/licon.jpg";

function Feed() {
  return (
    <>
      <Posts posts={posts} licon={licon} />
    </>
  );
}
export default Feed;
