const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const mainRoutes = require('./routes/main');
app.use(mainRoutes);

app.use((req,res,next) => {
    res.status(404).render('404');
});
app.listen(3000);