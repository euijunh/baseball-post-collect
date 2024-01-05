import CommunityListItem from "./CommunityListItem";

const CommunityList = () => {
  return (
    <div id="community-wrap">
      <ul id="community-list">
        {list.map(({title, list}, i) => (
          <CommunityListItem key={i} title={title} list={list} />
        ))}
      </ul>
    </div>
  );
}

export default CommunityList;