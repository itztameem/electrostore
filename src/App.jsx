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

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/footer" element={<FooterPage />} />
      </Routes>
    </>
  );
}

export default App;