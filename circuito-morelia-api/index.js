const express = require('express');
const routerApi = require('./routes');
const useGraphQL = require('./graphql');
const passport = require('passport');

require('./utils/auth');

const {
	errorHandler,
	boomErrorHandler,
	ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
var cors = require('cors');
const port = process.env.PORT || 3003;

app.use(cors());

app.get('/', (req, res) => {
	res.send('API Circuito Morelia');
});

app.use(passport.initialize());
app.use(express.json());

routerApi(app);
(async () => {
	await useGraphQL(app);
})();

app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
