import "./search-box.styles.css";

const SearchBox = ({ type, onChangeHandler }) => {
  return (
    <input
      className="search-box"
      type={type}
      placeholder="search monsters"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
