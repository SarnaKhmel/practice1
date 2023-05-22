import UsersList from "./Components/UsersList";

import users from "./data/users.json";

const App = () => {
  return (
    <>
      <UsersList customers={users} />
    </>
  );
};

export default App;
