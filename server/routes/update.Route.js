

const express = require('express');
const { User } = require('../modals');
const router = express.Router();



router.post('/', async (req, res, next) => {
    try {
        const id = req.body.id;
        const form = req.body.form;

        const fieldsToUpdate = {
            name: form.name,
            email: form.email,
            address: form.address,
            phoneNumber: form.phoneNumber
        };

        // Remove _id from the update fields to avoid modifying it
        delete fieldsToUpdate._id;

        const updatedData = await User.findOneAndUpdate({ _id: id }, { $set: fieldsToUpdate }, { new: true });

        if (!updatedData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        res.status(200).json({ updatedData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

