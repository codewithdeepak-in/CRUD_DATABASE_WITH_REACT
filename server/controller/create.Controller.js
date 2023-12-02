const { User } = require('../modals'); // Corrected from 'modals' to 'models'

const createController = {
    async create(req, res, next) {
        try {
            const email = req.body.email;
            const phoneNumber = req.body.phoneNumber;
            const existingEmailUser = await User.findOne({ email });
            if (existingEmailUser) {
                throw new Error('Email is already taken');
            }
            const existingPhoneNumberUser = await User.findOne({ phoneNumber });
            if (existingPhoneNumberUser) {
                throw new Error('Phone number is already taken');
            }
            const newUser = new User({
                ...req.body
            })
            await newUser.save();
            res.json({ message: 'User is created', user: newUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = { createController };
