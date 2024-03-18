function Posts(props) {
  const result = props.posts.map((e) => {
    return (
      <div id="frame">
        <h1>{e.username}</h1>
        <p>{e.content}</p>
        <div id="likes">
          <p>
            <img src={props.licon} alt="icon" />
            <sub>{e.likes}</sub>
          </p>
        </div>
        <p>{e.timestamp}</p>
      </div>
    );
  });

  return <>{result} </>;
}
export default Posts;
