import React,{useState} from 'react';
import './App.css';
import Addresslist from './components/Addresslist'
import { appinfos } from './utils/dataHandler'

// let appinfos : AppContent = {
//   data:[
//     {Appname:"string1", Urladdress:"string1.com"},
//     {Appname:"string2", Urladdress:"string2.com"},
//     {Appname:"string3", Urladdress:"string3.com"},
//   ]
// }

 //function itemlist() {
function App() {
  let [app, setApp] = useState("");
  let [url, setUrl] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [items, setItems]= useState(appinfos.data);

  const deleteEntry = (appname:string)=>{
    setItems(oldValues => {
      return oldValues.filter(item => item.Appname !== appname);
    })
    console.log(items);
  }

  const AddAppdata = () => {
    setIsLoading(true);
    try {
      items.push({delete:deleteEntry, Appname:app,Urladdress:url} );
      setUrl("");
      setApp("");
      console.log(items);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  ///Dummy Presentation Purpos///
  //items.push({delete:deleteEntry, Appname:"app1",Urladdress:"url"} );
  // appinfos.data.push({delete:deleteEntry, Appname:"app2",Urladdress:"url"} );
  // appinfos.data.push({delete:deleteEntry, Appname:"app3",Urladdress:"url"} );
  ///////////////////////////////

  return (
    <div className="p-8">
    <h1 className="text-2xl font-bold text-blue-800 mb-4">Data Dictionary List</h1>
    <div className="mb-4 flex items-center justify-center">
      <input
        type="text"
        value={app}
        onChange={(e) => setApp(e.target.value)}
        placeholder="Enter app name"
        className="p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter confluence data dictionary page url"
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button
        onClick={AddAppdata}
        className={`bg-brand text-white px-4 py-2 rounded ml-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Add"}
      </button>
      <button
        onClick={() =>{alert("implement something you soy \n \n \n sorry need more clear mind to do it")}}
        className={`bg-brand text-white px-4 py-2 rounded ml-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "load data"}
      </button>

    </div>
    <Addresslist data={items}/>

  </div>
  );
}

export default App;
