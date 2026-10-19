import AuthModal from "../../components/AuthModal/AuthModal";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Statistics from "../../components/Statistics/Statistics";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
      </main>
      <AuthModal />
    </>
  );
};

export default Home;
