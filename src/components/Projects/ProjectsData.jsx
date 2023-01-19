import chakraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import climaImage from "../../images/projects/clima.jpg";
import dymamicFormProject from "../../images/projects/dynamic.jpg";
import gasolineraProject from "../../images/projects/gasolinera.jpg";
import marvelProject from "../../images/projects/marvel.jpg";
import rickMorty from "../../images/projects/rick-morty.jpg";
import tareasProject from "../../images/projects/todo.jpg";

export const projectsPortFolio = [
  {
    title: "Rick & Morty API",
    image: rickMorty,
    techs: [
        { name: "Vite", src: viteImage },
      { name: "React", src: reactImage },
      { name: "Css", src: cssImage },
    ],
    description: "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
    repository: "https://github.com/eduardo846/ApiRickMortyTerminado.git",
    website: "https://illustrious-druid-781493.netlify.app",
  },
  {
    title: "Lists Todo",
    image: tareasProject,
    techs: [
        { name: "Vite", src: viteImage },
      { name: "React ", src: reactImage },
      { name: "Semantic UI React", src: semanticImage },
    ],
    description:
      "Application created with React JS and Semantic UI to make a list of tasks where you can add or remove it.",
    repository: "https://github.com/eduardo846/creadorTareasTerminado.git",
    website: "https://magnificent-stroopwafel-0f56da.netlify.app",
  },
  {
    title: "Clima API",
    image: climaImage,
    techs: [
        { name: "Vite", src: viteImage },
      { name: "React JS ", src: reactImage },
      { name: "Styled Components", src: styledImage },
    ],
    description:
      "Application created with React JS and Styled Components to make a request an external API.",
    repository: "https://github.com/eduardo846/entregable2.git",
    website: "https://playful-palmier-421e2a.netlify.app",
  },
  {
    title: "Marvel API",
    image: marvelProject,
    techs: [
        { name: "Vite", src: viteImage },
      { name: "React", src: reactImage },
      { name: "React Router ", src: reactRouterdomImage },
      { name: "Sass", src: sassImage },
      { name: "Semantic", src: semanticImage },
    ],
    description:
      "Application created with React JS, React Router and Sass to make a request an external API of Marvel.",
    repository: "https://github.com/eduardo846/marvelTerminado.git",
    website: "https://imaginative-fairy-ee0eb5.netlify.app",
  },
  {
    title: "Dynamic Form",
    image: dymamicFormProject,
    techs: [
        { name: "Vite", src: viteImage },
      { name: "React JS", src: reactImage },
      { name: "React Bootstrap", src: reactBootstrapImage },
    ],
    description:
      "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
    repository: "https://github.com/eduardo846/furmularioDinamicoTerminado.git",
    website: "https://venerable-marigold-110fa3.netlify.app",
  },
  {
    title: "Fuel Station",
    image: gasolineraProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "Chakra", src: chakraImage },
      { name: "React Router DOM", src: reactRouterdomImage },
    ],
    description:
      "Application created with Vite where you can save the information and see it on a summary",
    repository: "https://github.com/eduardo846/gasolineriaTerminado.git",
    website: "https://resonant-cactus-773152.netlify.app",
  },
];
