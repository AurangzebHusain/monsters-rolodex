import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-field.component";
const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState([]);
  useEffect(() => {
    console.log("Use effect fired");
    async function fetchMosnters() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (response != null) {
          const users = await response.json();
          if (users != null) {
            setMonsters(users);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchMosnters();
  }, []);
  useEffect(() => {
    console.log("Use effect fired");
    const fm = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setfilteredMonsters(fm);
  }, [monsters, searchField]);

  console.log(searchField);
  const searchUser = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };
  return (
    <div className="main-container">
      <SearchBox type="search" onChangeHandler={searchUser} />
      <CardList monsters={"I am a monster"} monsterList={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     console.debug("constructor called");
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }

//   async componentDidMount() {
//     console.debug("Component did mount");

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (response != null) {
//       const users = await response.json();

//       this.setState(
//         () => {
//           return { monsters: users };
//         },
//         () => {
//           console.log(this.state.monsters);
//         }
//       );
//     }
//   }

//   searchUser = (event) => {
//     this.setState({ searchString: event.target.value.toLowerCase() });
//   };

//   render() {
//     console.log("Render ");
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(this.state.searchString);
//     });
//     return (
//       <div className="main-container">
//         <SearchBox type="search" onChangeHandler={this.searchUser} />
//         <CardList monsters={"I am a monster"} monsterList={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
