import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    const newfilteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredUsers(newfilteredUsers);
  }, [users, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">User Search</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Users"
        className="users-search-box"
      />
      <CardList users={filteredUsers} />
    </div>
  );
};

export default App;

/*--Class component version--*/

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       users: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { users: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {
//         searchField,
//       };
//     });
//   };

//   render() {
//     //Destructuring
//     const { users, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredUsers = users.filter((user) => {
//       return user.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">User Search</h1>

//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search Users"
//           className="users-search-box"
//         />
//         <CardList users={filteredUsers} />
//       </div>
//     );
//   }
// }
