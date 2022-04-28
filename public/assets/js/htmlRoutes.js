app.use (express.static("./public")) 
app.get ("/notes",(req, res)=>{
res.sendFile (path.resolve(__dirname,"./public/notes.html"))
})
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
}); 