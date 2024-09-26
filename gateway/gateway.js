const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const authaccess = process.env.EMAIL +":"+process.env.APIKEY;
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/scrape',async (req, res)=>{
    //console.log ("hit");
    const uri= req.query.url;
    console.log(uri);
    await fetch(uri, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${Buffer.from(
            authaccess
          ).toString('base64')}`,
          'Accept': 'application/json'
        }
    })
    .then(response => {
        console.log(`Response: ${response.status} ${response.statusText}`);
        return response.text();
    })
    .then(text => res.send(text))
    .catch(err => console.error(err));
}); 

app.get('/', (req, res) => {
    res.send('Server started !')
});
