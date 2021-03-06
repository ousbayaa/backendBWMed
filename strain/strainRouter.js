const express = require('express');

const Strains = require('./strainModel');

const router = express.Router();

router.get('/', (req, res) => {
    Strains.getStrains()
    .then(strains => {
        res.json(strains);
    })
    .catch(err => {
        res.status(500).json({ message: 'Unable to Fetch Strains..'});
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Strains.getStrainById(id)
    .then(strain => {
        if(strain) {
            res.json(strain);
        }else {
            res.status(404).json({ message: 'Unable to Fetch Strain with that ID..'});
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to Fetch Strains.'});
    });
});

router.post('/', (req, res) => {
    const strainData = req.body;

    Strains.addStrain(strainData)
    .then(strain => {
        res.status(201).json(strain);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to Create a New Strain.' });
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const strainEdit = req.body;

    Strains.getStrainById(id)
    .then(strain => {
        if(strain) {
            Strains.updateStrains(strainEdit, id)
            .then(strain => {
                res.status(201).json(strain);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to Updated Strain.' })
            });
        }else {
            res.status(404).json({ message: 'Unable to Fetch Strain with that ID..' });
        };
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Strains.deleteStrain(id)
    .then(deleted => {
        if(deleted) {
            res.status(201).json(deleted);
        } else {
            res.status(404).json({ message: 'Unable to Delete Strain with that ID..' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to Delete Strain' });
    });
});

module.exports = router;