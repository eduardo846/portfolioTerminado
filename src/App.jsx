import AboutMe from "./AboutMe/AboutMe";
import Container from "./components/Container/Container";
import Navbar from "./components/NavBar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
        <Projects/>
      </Container>
    </>
  );
}

export default App;
