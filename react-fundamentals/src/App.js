import User from "./components/user";
import Users from "./components/users";

function App() {
  return (
    <div>
      <h2>App Component</h2>
      <p>This is my app component.</p>
      <hr/>
      {/* Functional Component */}
      <User />
      <User></User>
      <hr/>
      {/* Class Component */}
      <Users />
      <Users></Users>
    </div>
  );
}

export default App;
