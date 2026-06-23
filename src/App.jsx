import { Routes, Route } from "react-router-dom";

import {AnnouncementBar} from "./components/AnnouncementBar";
import {Navbar} from "./components/Navbar";

import {Home} from "./Pages/Home";
import {CategoriesPage} from "./Pages/CategoriesPage";
import {ProductsPage} from "./Pages/ProductsPage";
import {FeaturesPage} from "./Pages/FeaturesPage";
import {TestimonialsPage} from "./Pages/TestimonialsPage";
import {NewsletterPage} from "./Pages/NewsletterPage";
import {FooterPage} from "./Pages/FooterPage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/footer" element={<FooterPage />} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </>
  );
}

export default App;