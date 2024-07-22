import Contact from '../model/contact.model.js'; 
import User from '../model/auth.model.js';

export const createContactMessage = async (req, res) => {
    try {
        const { message, Name, email, subject } = req.body;

        if (!email.includes('@')) {
            return res.status(400).send({ error: 'Invalid email address' });
        }

        if (email.length < 8) {
            return res.status(400).send({ error: 'Email must be at least 8 characters long' });
        }

      

        if (!message || !Name || !subject) {
            return res.status(400).send({ error: 'Please provide all required fields' });
        }
        if (/\d/.test(Name)) {
            return res.status(400).send({ error: 'Name cannot contain numbers' });
        }
        if (Name.length < 3) {
            return res.status(400).send({ error: 'Name must be at least 3 characters long' });
        }

        const newContact = new Contact({ message, Name, email, subject });

        await newContact.save();

        res.status(201).send(newContact);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
export const getAllContacts = async (req, res) => {
    try {
        const userId = req.userId; 
        const user = await User.findById(userId);

        // if (!user || !user.isAdmin) {
        //     return res.status(403).send({ error: 'You do not have permission to add a category' });
        // }
        const contacts = await Contact.find();
        res.status(200).send(contacts);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

export const getSingleContact = async (req, res) => {
    try {
        const userId = req.userId; 
        const user = await User.findById(userId);

        // if (!user || !user.isAdmin) {
        //     return res.status(403).send({ error: 'You do not have permission to add a category' });
        // }
        const { id } = req.params;
        const contact = await Contact.findById(id);

        if (!contact) {
            return res.status(404).send({ error: 'Contact not found' });
        }

        res.status(200).send(contact);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
export const deleteContact = async (req, res) => {
    try {
        const userId = req.userId; 
        const user = await User.findById(userId);

        // if (!user || !user.isAdmin) {
        //     return res.status(403).send({ error: 'You do not have permission to add a category' });
        // }
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).send({ error: 'Contact not found' });
        }

        res.status(200).send({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};