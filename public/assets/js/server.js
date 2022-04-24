// TODO: Import express
const express = require('express');
const app = express()
const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));//allows us to reference css and html files in javascript 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/notes', (req, res) => res.json(notes));

app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:${3001}`);
});


//should it look like this router.post 



// Add a static route for index.html
//app.get('/home', (req, res) => {
  // `res.sendFile` is Express' way of sending a file
  // `__dirname` is a variable that always returns the directory that your server is running in
  //res.sendFile(__dirname + '/index.html');
//});

// TODO: Create a route for a GET request that will return the content of our `termData.json` file
//app.get('/api', (req, res) => res.json(termData));
//app.listen(PORT, () =>
  //console.log(`Example app listening at http://localhost:${PORT}`)
//);
