import './App.css';
import React,{useState,useEffect} from "react";
import Couple from "./components/category/Couple";
import Family from "./components/category/Family";
import Grandparent from "./components/category/Grandparent";
import House from "./components/category/House";
import Human from "./components/category/Human";
import Landscape from "./components/category/Landscape";
import Parent from "./components/category/Parent";
import People from "./components/category/People";
import Pet from "./components/category/Pet";
import Vechile from "./components/category/Vechile";
import Baby from './components/category/Baby';
import Compilation from './components/category/Compilation';
import Oil from './components/Product/Oil';
// import Slider from './components/Slider/Slider';
import Pensil from './components/Product/pensil';
import Charcoal from './components/Product/Charcoal';
import Water from './components/Product/Water';
import Acrylic from './components/Product/Acrylic';
import Pastel from './components/Product/Pastel';
import Coloredpensil from './components/Product/Coloredpensil';
import Video from './components/Home/Video';
import Pricing from './components/Pricing/Pricing';
import Term from './components/Termcondition/Term';
import Category from './components/category/Category';
import Medium from './components/medium/Medium';
import Frameoption from './components/Framingoption/Frameoption';
import Sizechart from './components/Sizechart/Sizechart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Hero from './components/Hero';
import Social from './components/Social';
import Gallery from './components/Home/Gallery';
import Gift from './components/Gift';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Whatsapp from './components/Whatsapp';
import Blogsection from './components/Blog/Blog';

import Login from './components/Forms/Login';
import Checkout from './components/Forms/Checkout';
import Offer from './components/Home/Offer';
import Work from './components/Work';
// import ImageGallery from './components/Gallery/Gallery';
import Gallerymain from './components/Gallery/Gallerymain';
import ContactUs from './components/Home/ContactUs';
import OilpaintGallery from './components/Gallery/OilpaintGallery';
import PensilsketchGallery from './components/Gallery/PensilsketchGallery';
import CharcoalGallery from './components/Gallery/CharcoalGallery';
import WaterGallery from './components/Gallery/WaterGallery';
import ColoredPencilGallery from './components/Gallery/ColoredPencilGallery';
import AcrylicGallery from './components/Gallery/AcrylicGallery';
import PastelGallery from './components/Gallery/PastelGallery';
import DetailedTestimonial from './components/DetailedTestimonial';
import AboutUs from './components/About/AboutUs';
import Cart from './components/Cart/Cart';
import Oilpricing from './components/Pricing/Oilpricing';
import Pencilpricing from './components/Pricing/Pencilpricing';
import Waterpricing from './components/Pricing/Waterpricing';
import Charcoalpricing from './components/Pricing/Charcoalpricing';
import Coloredpensilpricing from './components/Pricing/Coloredpensilpricing';
import Acrylicpricing from './components/Pricing/Acrylicpricing';
import Pastelpricing from './components/Pricing/Pastelpricing';

function App() {
  return ( 
    <>
    <BrowserRouter>
    <Navbar/>
    <Whatsapp/>
    <Routes>
      <Route path = "/" element={[<Hero />,<Testimonial/>,<Social />,<Category />,<Gift/>,<Gallery/>,<Work/>,<Video/>,<Blog/>,<Offer/>, <DetailedTestimonial/> ]}>
        <Route index element ={<Baby/>} />
          <Route path="baby" element={<Baby/>}/>
          <Route path='compilation' element={<Compilation/>}/>
          <Route path="couple" element={<Couple/>}/>
          <Route path="family" element={<Family/>}/>
          <Route path="grandparent" element={<Grandparent/>}/>
          <Route path="house" element={<House/>}/>
          <Route path="human" element={<Human/>}/>
          <Route path="landscape" element={<Landscape/>}/>
          <Route path="parent" element={<Parent/>}/>
          <Route path="people" element={<People/>}/>
          <Route path='pet' element={<Pet/>}/>
          <Route path='vechile' element={<Vechile/>}/>
      </Route>
      <Route path="/gallery" element={<Gallerymain />}/>
      <Route path="/gallery/oil-painting" element={<OilpaintGallery />}/>
      <Route path="/gallery/pencil-painting" element={<PensilsketchGallery />}/>
      <Route path="/gallery/charcoal-painting" element={<CharcoalGallery />}/>
      <Route path="/gallery/watercolor-painting" element={<WaterGallery />}/>
      <Route path="/gallery/colored-pencil-painting" element={<ColoredPencilGallery />}/>
      <Route path="/gallery/acrylic-painting" element={<AcrylicGallery />}/>
      <Route path="/gallery/pastel-painting" element={<PastelGallery />}/>
      <Route path="/product-category" element={<Category  />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path="/category" element={<Category/>}/>
      <Route path="/product-medium" element={<Medium />} />
      <Route path='/product/oil-painting' element={<Oil/>} />
      <Route path="/product/pensil-sketch-painting" element={<Pensil/>}/>
      <Route path="/product/pastel" element={<Pastel/>}/>
      <Route path="/product/arcylic" element={<Acrylic/>} />
      <Route path="/product/watercolor" element={<Water/>} />
      <Route path= "/product/colored-pensil" element={<Coloredpensil/>}/>
      <Route path="/product/charcoal" element={<Charcoal/>}/>
      <Route path='/size-chart' element={<Sizechart/>} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/framing-option' element={<Frameoption/>} />
      <Route path="/blog-section" element={<Blogsection/>}/>
      <Route path='/guarantee' element={<Term/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/pricing/oil-pricing" element={<Oilpricing/>}/>
      <Route path="/pricing/pencilsketch-pricing" element={<Pencilpricing/>}/>
      <Route path='/pricing/watercolor-pricing' element={<Waterpricing/>}/>
      <Route path="/pricing/charcoal-pricing" element={<Charcoalpricing/>}/>
      <Route path="/pricing/coloredpencil-pricing" element={<Coloredpensilpricing/>}/>
      <Route path="/pricing/acrylic-pricing" element={<Acrylicpricing/>}/>
      <Route path="/pricing/pastel-pricing" element={<Pastelpricing/>}/>
      <Route path = "/*" element={[<Hero />,<Testimonial/>,<Social />,<Category />,<Gift/>,<Gallery/>,<Work/>,<Video/>,<Blog/>,<Offer/>, <DetailedTestimonial/> ]}>
        <Route index element ={<Baby/>} />
          <Route path="baby" element={<Baby/>}/>
          <Route path='compilation' element={<Compilation/>}/>
          <Route path="couple" element={<Couple/>}/>
          <Route path="family" element={<Family/>}/>
          <Route path="grandparent" element={<Grandparent/>}/>
          <Route path="house" element={<House/>}/>
          <Route path="human" element={<Human/>}/>
          <Route path="landscape" element={<Landscape/>}/>
          <Route path="parent" element={<Parent/>}/>
          <Route path="people" element={<People/>}/>
          <Route path='pet' element={<Pet/>}/>
          <Route path='vechile' element={<Vechile/>}/>
      </Route>
    </Routes>
    <Footer/>
 <Navigation/>
 </BrowserRouter>
    </>
  );
}

export default App;
