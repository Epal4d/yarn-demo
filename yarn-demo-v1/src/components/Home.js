import {HashRouter, Routes, Route} from "react-router-dom"
import { useref } from "react" 
import Header from "./components/Header"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
/*
jsx - page/component
ie: App = react component / page 
export function - jsx/ component/page 
- other components can re-use app component
*/
function App() {

  const divdisplay = useref("")// refence, select munipulate jsx element ie: DOM
  
  function lnkdemo()
  {
    let msgText = "#App:: lnkdemo1"
    console.log(msgText)
    // const divdisplay = document.getElementById("divdisplay")
    // validate if divdisplay is found
    // divdidsplay.innerText = ...
    divdisplay.current.innerText = msgText
  }
  
  //-- Funtion inside a funtion 
  function lnkDisplayInfor1()
  {
    let msgText = "# App::lnkDisplayInfo1"

    //alert(msgText)
    console.log(msgText)

  

  }
  
  const lnkDisplayInfor2 = () => {

    let msgText = "# App:: linDisplay Info2"

    // alert(msgText)
    console.log(msgText)

  }

  //arrow function - es5+ optimized function used in functional javascript programming
  //function is defined as a variable 
  const btnDisplayInfo2 = () => 
  { 

    let msgText = "#App::tbnDisplayInfo2"

    // alert(msgText)
    console.log(msgText)

  }

//--- function defined before retrun (
  //react eslint - javascrcipt compiler hints, errors, warnings
  //Line 10:12:  'lnkDisplayInfo1' is defined but never used

  return (
    /*
      1 top level container elemen
      can have multiple container element 
      top level - div 
      top <></>
    */

    /*
    props = properties - pass data to a component
    property name = any-name=any-js-data-type
    can pass in 1 or more properties/attributes 
    */
   <>     
      <div>
        <Nav></Nav>        
      </div>
      <div>
        <Header title ="React Yarn Demo intro 1.0"/>
        </div>
        <div>
          <h2>Demo React Yarn app v1</h2>
        </div>
        <p></p>
        <a href="#" onClick={lnkDisplayInfor1}> Display info demo 1</a>
        <p></p>
        <a href="#" onClick={lnkDisplayInfor2}> Display info demo 2</a>
        <p></p>
        <button onClick={btnDisplayInfo2}>Display info demo 2</button>
        <p></p>
        <div id="divdisplay" ref={divdisplay}>
        </div>
        <div>
          <Footer title="footer" year="2025"></Footer>
        </div>
    </>
  );
}

export default App;
