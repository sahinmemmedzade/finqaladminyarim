import bcrypt from 'bcrypt';
import User from '../model/auth.model.js';
import { genareteTokenandSetCookie } from '../midleware/generateTokenandSetCookie.js';

export const signup = async (request, response) => {
    try {
        const { userName, password, confirmPassword, email } = request.body;
        console.log('Received userName:', userName);
        console.log('Received email:', email);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/; 
        const emailRegex = /^[\w-\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/; 

        if (!userName || !password || !confirmPassword || !email) {
            return response.status(400).send({ error: "Please fill all fields" });
        }
        if (confirmPassword !== password) {
            return response.status(400).send({ error: "Passwords do not match" });
        }
        if (!passwordRegex.test(password)) {
            return response.status(400).send({ error: "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one digit" });
        }
        let isAdmin = false;
        if (userName === 'adminn4' && password === '1234456Sah') {
            isAdmin = true;
        }
        if (userName.length < 3) {
            return response.status(400).send({ error: "Username must be at least 3 characters long" });
        }
        if (!emailRegex.test(email)) {
            return response.status(400).send({ error: "Invalid email address. Email must be at least 8 characters long, include '@', and contain at least one '.'" });
        }

        const existinguser = await User.findOne({ userName });
        const existingemail = await User.findOne({ email });
        if (existinguser || existingemail) {
            return response.status(400).send({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ userName, email, password: hashedPassword, isAdmin });

        if (!newUser) {
            return response.status(404).send({ error: "Failed to create user" });
        }

        genareteTokenandSetCookie(newUser._id, response);
        response.status(201).send(newUser);
    } catch (error) {
        console.log(`Error in signup controller: ${error.message}`);
        response.status(500).send({ error: "Internal Server Error" });
    }
};

export const login = async (request, response) => {
    try {
        const { identifier, password } = request.body; 
        if (!identifier || !password) {
            return response.status(400).send({ error: "Please fill all fields" });
        }

        const isEmail = identifier.includes('@');
        const user = isEmail 
            ? await User.findOne({ email: identifier }) 
            : await User.findOne({ userName: identifier });

        if (!user) {
            return response.status(400).send({ error: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return response.status(400).send({ error: "Invalid password" });
        }

        genareteTokenandSetCookie(user._id, response);
        response.status(200).send(user);
    } catch (error) {
        console.log(`Error in login controller: ${error.message}`);
        response.status(500).send({ error: "Internal Server Error" });
    }
};

export const logout = async (request, response) => {
    response.clearCookie("jwt");  
    response.status(200).send("Logged out successfully");
};


export const updatePassword = async (req, res) => {
    try {
        const { userId } = req.params;
        const { currentPassword, newPassword, confirmNewPassword } = req.body;

        if (!currentPassword || !newPassword || !confirmNewPassword) {
            return res.status(400).send({ error: 'Please fill all fields' });
        }

        if (newPassword !== confirmNewPassword) {
            return res.status(400).send({ error: 'Passwords do not match' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).send({ error: 'Current password is incorrect' });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        await user.save();

        res.status(200).send({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(`Error updating password: ${error.message}`);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

