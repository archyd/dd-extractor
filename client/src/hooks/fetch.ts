import {Buffer} from 'buffer';
import {generateCSVdata} from '../utils/dataHandler'
Buffer.from('anything','base64');

export const fetchData = async(urladress:string, title:string) =>{
  const result =await fetch(`http://localhost:5000/scrape?url=${encodeURIComponent(urladress)}`)
  .then(resp =>{
    console.log(resp.status);
    return resp.text();
  }).then(response =>{
    //console.log(response)
    generateCSVdata(response,title)
  })
};

