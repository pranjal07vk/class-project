import User from "../models/user.model.js"

//register

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, username } = req.body

        //all fields present
        if (!username || !password || !email || !name) {
            return res.status(400).json({ message: "All fields required" })
        }

        //if the email or username already exists
        const usernameExists = await User.findOne({ username })

        if (usernameExists) {
            return res.status(400).json({ message: "Username already exists" })
        }

        const emailExists = await User.findOne({ email })

        if (emailExists) {
            return res.status(400).json({ message: "Email already exists" })
        }

        //password should be greater than 6 characters
        if (password.length < 6) {
            return res.status(400).json({ message: "Password should be at least 6 characters long" })
        }

        const newUser = await User.create({
            name,
            email,
            password,
            username
        })

        res.status(201).json({ message: "User Registered", user: newUser })


    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}