import CommunityListItem from "./CommunityListItem";
import {CommunityListType} from "../model/community";
import {CATEGORY_LIST} from "../constants/index";

const CommunityList = () => {
  const list: CommunityListType[] = [ // 임시 데이터
    {
      title: 'Mlb Park KBO',
      posts: [
        {
          text: 'post1',
          link: 'http://naver.com'
        },
        {
          text: 'post2',
          link: 'http://naver.com'
        }
      ]
    }
  ];
  
  const onCategorySelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.target.value;
  }

  return (
    <div id="community-wrap">
      <select name="category" onChange={onCategorySelectChange} defaultValue="0">
        {CATEGORY_LIST.map((name: string, i: number) => (
          <option key={i} value={i}>{name}</option>
        ))}
      </select>
      <ul id="community-list">
        {list.map(({title, posts}) => (
          <CommunityListItem key={title} title={title} posts={posts} />
        ))}
      </ul>
    </div>
  );
}

export default CommunityList;