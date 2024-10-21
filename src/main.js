import '../assets/css/style.css';
import OutlineComponent from "./components/outline-sidebar/main.js";
import LocalStorageHandler from "./utility/localStorage.js";

const localStorage = new LocalStorageHandler();
const outline = new OutlineComponent(localStorage.getSections(), localStorage.getKeywords());

