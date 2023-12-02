const { User } = require("../modals");

const fetchController = {
    async fetch(req, res, next){
        try{
            const data = await User.find();
            if(!data){
                throw new Error('No Data is found');
            }
            res.status(200).json({
                message: 'All user Data',
                data: data
            })
        }catch(error){
            res.status(500).json({
                error: error.message
            })
        }
    }
}

module.exports = { fetchController };