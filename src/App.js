/** @format */

import "./App.css";
import About from "./Components/About";
import AuthorComponent from "./Components/Author";
import FormComponent from "./Components/FormComponent";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <FormComponent />
      <About />
      <AuthorComponent />
    </div>
  );
}

export default App;
