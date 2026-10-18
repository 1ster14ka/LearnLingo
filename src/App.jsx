import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
      </main>
    </>
  );
}
export default App;
