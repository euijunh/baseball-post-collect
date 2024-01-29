import {CommunityListType} from "../model/community";

interface OwnProps extends CommunityListType {}

const CommunityListItem = ({title, posts}: OwnProps) => {
  return (
    <li>
      <h3>{title}</h3>
      <ol>
        {posts.map((post, i) => (
          <li key={i}><a href={post.link}>{post.text}</a></li>
        ))}
      </ol>
    </li>
  );
}

export default CommunityListItem;