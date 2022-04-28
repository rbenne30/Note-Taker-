const express = require('express');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));







//const path = require('path');


//const app = express();
//const PORT = process.env.PORT || 3001;

//app.use (express.static("./public")) 
//app.get ("/notes",(req, res)=>{
//res.sendFile (path.resolve(__dirname,"./public/notes.html"))
//})
//app.get('/', (req,res) => {
  //res.sendFile(path.join(__dirname, './public/index.html'));
//}); 
//app.post('api/notes', (req,res)=> {
  
  app.listen(PORT, () => console.log('Now listening on port 3001!'));
