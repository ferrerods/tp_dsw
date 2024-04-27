app.use(express.json());

const gymUsers = require('../models/gym.models')

//gymUsers = [];

// Create user
app.post('/gymUsers', (req, res) => {
    const { typeUser, name, typeDoc, numberDoc, address, dateBirth, physicalFitness, active } = req.body;
    if (!typeUser || !name || !typeDoc || !numberDoc || !address || !dateBirth || !physicalFitness || !active) {
        return res.status(400).send('Missing fields');
    }

    const newUser = { id: user.length + 1, typeUser, name, typeDoc, numberDoc, address, dateBirth, physicalFitness, active };
    gymUsers.push(newUser);
    res.status(201).send(newUser);
});

// Get all users
app.get('/gymUsers', (req, res) => {
    res.json(gymUsers);
});

// Get one user
app.get('/gymUsers/:id', (req, res) => {
    const user = gymUsers.find(b => b.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

// Update user
app.put('/gymUsers/:id', (req, res) => {
    const _user = gymUsers.find(b => b.id === parseInt(req.params.id));
    if (!_user) {
        return res.status(404).send('User not found');
    }

    const { typeUser, name, typeDoc, numberDoc, address, dateBirth, physicalFitness, active } = req.body;
    _user.typeUser = typeUser || _user.typeUser;
    _user.name = name || _user.name;
    _user.typeDoc = typeDoc || _user.typeDoc;
    _user.numberDoc = numberDoc || _user.numberDoc;
    _user.address = address || _user.address;
    _user.dateBirth = dateBirth || _user.dateBirth;
    _user.physicalFitness = physicalFitness || _user.physicalFitness;
    _user.active = active || _user.active;

    res.send(_user);
});

// Delete user
app.delete('/gymUsers/:id', (req, res) => {
    const userIndex = gymUsers.findIndex(b => b.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }

    gymUsers.splice(userIndex, 1);
    res.status(204).send();
});