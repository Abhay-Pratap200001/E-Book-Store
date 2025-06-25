// Importing all components used on the homepage
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Freebook from "../component/Freebook";
import Footer from "../component/Footer";

// Main Home component that renders the homepage layout
function Home() {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />

      {/* Hero section with welcome message and email input */}
      <Banner />

      {/* Section showing free book offerings */}
      <Freebook />

      {/* Footer section with site links/info */}
      <Footer />
    </>
  );
}

export default Home;
