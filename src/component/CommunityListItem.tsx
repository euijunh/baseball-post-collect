const CommunityListItem = ({title, list}) => {
  return (
    <li>
      <h3>{title}</h3>
      <ol>
        {list.map((post, i) => (
          <li key={i}><a href={post.link}>{post.text}</a></li>
        ))}
      </ol>
    </li>
  );
}

export default CommunityListItem;