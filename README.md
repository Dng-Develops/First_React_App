# Get users from api and set current state of the App component

```javascript
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

```
