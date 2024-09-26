
export const getData = async()=>{
//  const fs = require('fs');
//  const obj = JSON.parse(fs.readFileSync('.js', 'utf8'));
}

export const writeData = async()=>{
 
}

export type AppContent ={
  data:{
    delete:any
    Appname:string
    Urladdress:string} []
}

export let appinfos : AppContent = {
  data:[
    // {delete:{}, Appname:"dummy view only1", Urladdress:"string1.com"}, //////// dummy
    // {delete:{}, Appname:"dummy view only3", Urladdress:"string3.com"}, //////// dummy
    //{delete:{}, Appname:"dummy3", Urladdress:"string1.com"}, //////// dummy
  ]
} 

const cheerio = require("cheerio");
export function generateCSVdata(text:string, filename:string){ // <==== do not disturb
    let data :string[] = [];
    const $= cheerio.load(text); // load the result
  
    $('table').last().find('tbody').eq(0).find('tr').each((i:number,el:Element)=>{ ///basicly take last table within the content (at least that what most content did)
      const maxcol = Array.from($(el).find('td')).length; //// retrieve total columns on that table
      let output:string[] =[];
      $(el).find('td').each((j:number, el2:Element) =>{ /// start loopwithin the column
        if (j === maxcol-1){
          output.push($(el2).text() + "\n");  /// on last column add newline
        } else{
          output.push($(el2).text() + ","); /// if not put comma
        }
      });
      const rows = output.join('');
      data.push(rows);
    })
    downloadCSVFile(data.join(''),filename); /// some download method from the internet (im just normies btw)
  }

  function downloadCSVFile(csv_data:string, filename:string) {
    // Create CSV file object and feed
    // our csv_data into it
    const CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });
  
    // Create to temporary link to initiate
    // download process
    let temp_link = document.createElement('a');
  
    // Download csv file
    temp_link.download =filename+".csv";
    let url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
  
    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
  
    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
  }