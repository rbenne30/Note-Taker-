const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;

app.use (express.static("./public")) 
app.get ("/notes",(req, res)=>{
res.sendFile (path.resolve(__dirname,"./public/notes.html"))
})

  app.listen(PORT, () => console.log('Now listening on port 3001!'));
