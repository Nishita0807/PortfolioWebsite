import { render } from "@testing-library/react";
import React from "react";
import Title from "./components/Title";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "./context";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillStack from "./components/SkillStack";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import Recommendation from "./components/Recommendation";
import AddProject from "./components/AddProject";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import BlogPage from "./components/BlogPage";
import NotFound from "./components/NotFound";
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
import WriteRecommendation from "./components/WriteRecommendation";
import AddBlog from "./components/AddBlog";
import Test from "./components/Test";
import ScrollToTop from "./components/ScrollToTop";
function App() {

  // let a=10;
  // let b=20;
  // let name="Nishita";
  return (
  <Provider>
          <BrowserRouter>
          <ScrollToTop/>
         <Navbar />
         <Routes>
          <Route exact path="/" element={<><Title />
            <Recommendation />
            <SkillStack />
            <ProjectSection />
            <About />
            <BlogSection /></>}>
            
          </Route> 
      
       
      
      
      
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/recommendation" element={<WriteRecommendation/>}/>
      <Route exact path="/all-projects" element={<AllProjects/>}/>
      <Route exact path="/all-blogs" element={<AllBlogs/>}/>
      <Route exact path="/project/add" element={<AddProject/>}/>
      <Route exact path="/blog/add" element={<AddBlog/>}/>
      <Route exact path="/project/:id" element={<ProjectPage/>}/>
      <Route exact path="/blog/:id" element={<BlogPage/>}/>
      <Route exact path="/test" element={<Test/>}/>
      <Route path ="*"  element={<NotFound/>}/>
         </Routes>
      
      
 


  <Footer /> 

    </BrowserRouter>
  </Provider>


 
    // <div className="App">
    //   <h1 className="customStyle">Portfoilo website {name}</h1>
    // </div>
    
   
   


  );

  // return React.createElement(
  //   "div",
  //   {className:"App"},
  //   React.createElement("h1",null,"Portfolio website")
  // );
  // }
  // class App extends Component{
  //   render(){
  //     return(
  //       <div className="App">
  //      <h1 className="customStyle">Portfoilo website {name}</h1>
  //    </div>

  //     )

  //   }
}

export default App;
