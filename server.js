const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Root route serves the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'OSC-User-Testing-Summary.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
