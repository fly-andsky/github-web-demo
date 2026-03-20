import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ToastContainer } from "@/components/ui/toast"
import { HomePage } from "@/pages/HomePage"
import { ProductsPage } from "@/pages/ProductsPage"
import { ContactPage } from "@/pages/ContactPage"
import { ScrollToTop } from "@/components/ScrollToTop"

function App() {
  return (
    <BrowserRouter basename="/github-web-demo">
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  )
}

export default App