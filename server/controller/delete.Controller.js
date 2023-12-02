const { User } = require("../modals");

const deleteController = {
    async delete(req, res, next){
        try{
            const id = req.params.id;
            const response = await User.deleteOne({_id: id})
            if(response){
                const data = await User.find();
                res.status(200).json({message: 'Data has been delete Successfully', data})
            }
        }catch(error){
            res.status(500).json({
                error: error.message
            })
        }
    }
}

module.exports = { deleteController }