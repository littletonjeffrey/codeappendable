//Allows use of the dom in react
import ReactDOM from "react-dom"
// Allows use of the App component
import App from'./app'
// allows use of the css file
import './style.css'
// Renders the component to the index.html using the root tag
ReactDOM.render(<App/>, document.querySelectorAll('#root'));

