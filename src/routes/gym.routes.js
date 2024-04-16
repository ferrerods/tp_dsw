const express = require("express")
const { default: mongoose } = require("mongoose")
const router = express.Router()
const gymUser = require('../models/gym.models')


// get ALL users
router.get('/', async (req, res) => {
    try {
        const users = await gymUser.find();
        console.log('Get All', users)

        if (users.length === 0) {
            return res.status(204).json([])
        }

        res.json(users)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// create one user
router.post('/', async (req, res) => {
    const { typeUser, name, typeDoc, numberDoc, address, dateBirth, physicalFitness, active } = req?.body

    if (!typeUser || !name || !typeDoc || !numberDoc || !address || !dateBirth || !physicalFitness || !active) {
        return res.status(400).json(["Los campos obligatorios"])
    }

    const gym_user = new gymUser({
        typeUser,
        name,
        typeDoc,
        numberDoc,
        address,
        dateBirth,
        physicalFitness,
        active
    })
    try {
        const newUser = await gym_user.save()
        console.log('Get user', newUser)
        res.status(201).json({ newUser })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})