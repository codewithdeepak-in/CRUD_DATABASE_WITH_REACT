const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const {User} = require('./modals/index');
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
    res.json({
        message: 'There is some response'
    })
})
app.use("/", routes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});



(
    async() => {
        try{
            const connection = await mongoose.connect('mongodb+srv://bagpacker3778:Aed2TxgttaHf6w5w@cluster0.wueyulq.mongodb.net/myapp');
            if(connection){
                console.log('Connected to Database.');
            }
        }catch(error){
            console.log('Error' + error.message)
        }
    }
)()

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is listen at ${port}`)
})