import { Navbar } from "./components/Navbar"
import {Footer} from "./components/Footer"
import { useState } from "react"
import { Hero } from "./components/Hero"
import { Categories } from "./components/Categories"
import { ProductGrid } from "./components/ProductGrid"
import { AnnouncementBar } from "./components/AnnouncementBar"
import { Features } from "./components/Features"
import { Testimonials } from "./components/Testimonials"
import { Newsletter } from "./components/Newsletter"

function App() {
 return (
    <>
<AnnouncementBar/>
<Navbar/>
<Hero/>
<Features/>
<Categories/>
<ProductGrid/>
<Testimonials/>
<Newsletter/>
<Footer/>
    </>
  )
}

export default App