const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


require('./routes/notesRoutes')(app);
require('./routes/htmlRoutes')(app);

// some sort of data or empty array or something
// data should be stored and retrieved from a JSON file

// needs routing so that when 






app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));