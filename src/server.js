const app = require('./app');
let port = 3000;

app.listen(port, () => {
    console.log(`[soupstock] App listening on port ${port}`);
});