import Header from "../components/Header"
import headerImage from '../assets/header.jpg';
import logoImage from '../assets/Rick&Mortylogo.webp';
const Home = () => {
  return (
    <Header
      title="header.welcome"
      subtitle="header.subtitle"
      buttonText="header.start"
      onButtonClick={() => { /* TODO: implement button click handler */ }}
      imageSrc={headerImage}
      imageAlt="Imagen de cabecera"
      extraImageSrc={logoImage}
    />
  )
}

export default Home

