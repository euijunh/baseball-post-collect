interface OwnProps {
  title:string;
  list: {
    text:string;
    link:string;
  }[]
}

const CommunityListItem = ({title, list}:OwnProps) => {
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