// controllers/advertisiment.controller.js

import Advertisement from '../model/advertisiment.model.js';

export const addAdvertisement = async (request, response) => {
    try {
        const { path } = request.file || {};
        
        // Check if the required field is empty
        if (!path) {
            return response.status(400).send({ error: "Please upload a file" });
        }

        // Create a new advertisement
        const newAdvertisement = await Advertisement.create({
            productPic: path
        });

        response.status(201).send(newAdvertisement);
    } catch (error) {
        response.status(500).send({ error: error.message });
    }
};
export const getAllAdvertisements = async (request, response) => {
    try {
        // Bütün reklamları əldə edin
        const advertisements = await Advertisement.find();

        if (!advertisements.length) {
            return response.status(404).json({ error: 'No advertisements found' });
        }

        response.status(200).json(advertisements);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};
export const getSingleAdvertisement = async (request, response) => {
    const { advertisementId } = request.params;

    try {
        const advertisement = await Advertisement.findById(advertisementId);

        if (!advertisement) {
            return response.status(404).json({ error: 'Advertisement not found' });
        }

        response.status(200).json(advertisement);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

export const deleteAdvertisement = async (request, response) => {
    const { advertisementId } = request.params;

    try {
        const advertisement = await Advertisement.findByIdAndDelete(advertisementId);

        if (!advertisement) {
            return response.status(404).json({ error: 'Advertisement not found' });
        }

        response.status(200).json({ message: 'Advertisement deleted successfully' });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};
