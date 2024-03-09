import { Avatar, Intro, SkillList } from "./components.jsx";

function App() {
  return (
    <>
      <header>
        <h1>Profile Card</h1>
        <p>
          this is the profile card of ahmed mustafa, a self taught web developer
        </p>
      </header>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

export default App;
