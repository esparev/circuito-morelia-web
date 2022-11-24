const express = require('express');
const routerApi = require('./routes');
const passport = require('passport');

require('./utils/auth');

const {
	errorHandler,
	boomErrorHandler,
	ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
	res.send('API Circuito Morelia');
});

app.use(passport.initialize());
app.use(express.json());

routerApi(app);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
