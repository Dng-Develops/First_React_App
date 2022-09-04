# Get ursers through api and set current state of the app component

componentDidMount() {
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((users) =>
this.setState(
() => {
return { users: users };
},
)
);
}
