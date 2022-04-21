const Express = require('express');
const Cors = require('cors');
const router = require('./router');

const app = new Express();
const PORT = 3005;

app.use(Cors());
app.use(Express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`server running on http://127.0.0.1:${PORT}`);
});