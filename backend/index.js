const express = require('express');

const app = express();
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
	res.send('API Circuito Morelia');
});

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
