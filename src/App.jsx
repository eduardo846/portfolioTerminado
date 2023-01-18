import AboutMe from "./AboutMe/AboutMe";
import Container from "./components/Container/Container";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
      </Container>
    </>
  );
}

export default App;
