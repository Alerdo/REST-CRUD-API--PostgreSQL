const express = require('express');
const studentsRoutes = require('./src/students/routes')
const app = express();
const port = 3003;

app.use(express.json());




// app.get("/", (req, res) => {
//     res.send("Hello There")
// })

app.use('/api/v1/students', studentsRoutes)

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        status: 'error',
        message: error.message || 'Internal Server Error',
    });
});


app.listen(port, () => console.log(`App listening on port ${port}`));