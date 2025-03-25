import Header from "./components/Header.jsx";
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from "./components/Examples.jsx";

function MainGoal() {
  return (
    <h3>My main goal: Learn coding with React</h3>
  );
}

function App() {
  
  return (
    <div> 
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
      <MainGoal />
    </div>
  );
}

export default App;
