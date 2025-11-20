import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Categories from "./components/Categories";
import PromoBanner from "./components/PromoBanner";
import Articles from "./components/Articles";
import Newsletter from "./components/NewsLetter";
import ContactWidget from "./components/ContactWidget";


export default function Home() {
  return (
    <main className="bg-amber-50">
      {/* <Navbar /> */}
      <Hero />
      <Trending />
      <Categories />
      <PromoBanner />
      <Articles />
      <Newsletter />
      <ContactWidget />
      {/* <Footer /> */}


    </main>
  );
}
