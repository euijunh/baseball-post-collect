const Search = () => {
  const onSubmitSearch = (e:any) => {
    e.preventDefault();
  }
  return (
    <form id="search-form" onSubmit={onSubmitSearch}>
      <input type='text' id="search-input" className="search-item" />
      <button type='submit' id="search-btn" className="search-item">검색</button>
    </form>
  );
}

export default Search;
