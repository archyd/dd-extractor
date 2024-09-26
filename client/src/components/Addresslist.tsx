import PropTypes from "prop-types";
import './Addresslist.css'
import { fetchData } from "../hooks/fetch";
import { AppContent} from "../utils/dataHandler";

export default function Addresslist({data}:AppContent) {
 return (
  <div>
   <ul className="no-bullets" >
    {
        data.map(el  =>
            <li key={el.Appname}> 
                <a href="#" onClick={() => fetchData(el.Urladdress, el.Appname)}  >⬇️</a>
                <a href="#" onClick={() => {el.delete(el.Appname)}} >❌</a> 
                <a>  {el.Appname+" | "+ el.Urladdress } </a>
            </li>
        )
    }
   </ul>
  </div>
 );
}