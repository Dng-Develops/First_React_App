import "./search-box.styles.css";

const SearchBox = ({ placeholder, onChangeHandler, className }) => (
  <input
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
