const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const {User} = require('./modals/index');
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use("/api", routes);


app.get('/' , async (req, res, next) => {
    res.send(<h3>Hello World</h3>)
} )


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