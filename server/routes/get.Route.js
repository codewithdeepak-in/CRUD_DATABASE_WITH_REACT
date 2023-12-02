const { User } = require("../modals");

const getRoute = async (req, res, next) => {
    try{
        const id = req.params.id;
        const response = await User.findById(id);
        res.json({response})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

module.exports = getRoute;