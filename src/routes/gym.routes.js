const express = require("express")
const { default: mongoose } = require("mongoose")
const router = express.Router()
const gymUser = require('../models/gym.models')


// MIDDLEWARE
const getUsers = async (req, res, next) => {
    let gUser;
    const { id } = req.params;

    if(!id.match()){
        return res.status(404).json({
            message : 'El ID del usuario no es válido'
        })
    }

    try{
        gUser = await gymUser.findById(id);
        if(!gUser){
            return res.status(404).json({
                message : 'El ID del usuario no fue encontrado'
            })
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    res.gUser = gUser;
    next()
}

// GET ALL users
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

// GET user
router.get('/:id', getUsers, async (req, res) => {
    try {
        res.json(res.gUser);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// CREATE user
router.post('/', async (req, res) => {
    const { typeUser, name, typeDoc, numberDoc, address, dateBirth, physicalFitness, active } = req?.body

    if (!typeUser || !name || !typeDoc || !numberDoc || !address || !dateBirth || !physicalFitness || !active) {
        return res.status(400).json(["Required Fields"])
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

// PUT user
router.put('/:id', getUsers, async (req, res) => {
    try {
        //typeUser, name, typeDoc, numberDoc, address, dateBirth, physicalFitness, active 
        const _gUser = res.gUser
        _gUser.typeUser = req.gUser.typeUser || gUser.typeUser
        _gUser.name = req.body.name || gUser.name;
        _gUser.typeDoc = req.body.typeDoc || gUser.typeDoc;
        _gUser.numberDoc = req.body.numberDoc || gUser.numberDoc;
        _gUser.address = req.body.address || gUser.address;
        _gUser.physicalFitness = req.body.physicalFitness || gUser.physicalFitness;
        _gUser.active = req.body.active || gUser.active;

        const updatedUser = await gUser.save()
        res.json(updatedUser)

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

// PATCH user
router.patch('/:id', getUsers, async (req, res) => {
    try {
        //typeUser, name, typeDoc, numberDoc, address, dateBirth, physicalFitness, active 
        const _gUser = res.gUser
        _gUser.typeUser = req.gUser.typeUser || gUser.typeUser
        _gUser.name = req.body.name || gUser.name;
        _gUser.typeDoc = req.body.typeDoc || gUser.typeDoc;
        _gUser.numberDoc = req.body.numberDoc || gUser.numberDoc;
        _gUser.address = req.body.address || gUser.address;
        _gUser.physicalFitness = req.body.physicalFitness || gUser.physicalFitness;
        _gUser.active = req.body.active || gUser.active;

        const updatedUser = await gUser.save()
        res.json(updatedUser)

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

// DELETE user
router.delete('/:id', getUsers, async (req, res) => {
    try {
        const _gUser = res.user
        await _gUser.deleteOne({
            _id: _gUser._id
        });
        res.json({
            message: `El usuario ${_gUser.name} fue eliminado correctamente`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }  
  })

module.exports = router