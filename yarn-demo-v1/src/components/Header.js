import { link } from "react-router-dom"
//custom react element/components/pages 
//move into seperate file 
export default function Header(props){
    //element/component/page - return jsx

    //props - can be called any name 
    return (
      <>
        <h2>{props.title}</h2>
      </>
    )
}

/*

ERROR in [eslint]
src\App.js
  Line 64:10:  'Header' is not defined  react/jsx-no-undef

*/