const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./connect')
const Chicken = require('./db');
// Création de l'application Express
const app = express();


// Configuration du middleware body-parser pour analyser les requêtes JSON
app.use(bodyParser.json());

// Route pour ajouter un chicken
app.post('/chicken', async (req, res) => {
    try {
      const { name, weight, birthday, steps, isRunning} = req.body;
  
      // Créer un nouvel objet Chicken
      const chicken = new Chicken({ name, weight, birthday, steps, isRunning });
  
      // Sauvegarder l'objet Chicken dans la base de données
      await chicken.save();
  
      res.status(200).json({ message: 'Chicken ajouté avec succès', chicken });
    } catch (error) {
      console.error('Erreur lors de l\'ajout du chicken :', error);
      res.status(500).json({ message: 'Une erreur est survenue' });
    }
  });

// Route pour obtenir tous les chickens
    app.get('/chicken', async (req, res) => {
    try {
      const chickens = await Chicken.find();
      res.json(chickens);
    } catch (error) {
      console.error('Erreur lors de la récupération des chickens :', error);
      res.status(500).json({ message: 'Une erreur est survenue' });
    }
  });
  
// Route pour obtenir un chicken par son ID
    app.get('/chicken/:id', async (req, res) => {
    try {
      const chickenId = req.params.id;
      const chicken = await Chicken.findById(chickenId);
  
      if (!chicken) {
        return res.status(404).json({ message: 'Chicken non trouvé' });
      }
  
      res.json(chicken);
    } catch (error) {
      console.error('Erreur lors de la récupération du chicken :', error);
      res.status(500).json({ message: 'Une erreur est survenue' });
    }
  });
  
// Route pour mettre à jour un chicken avec la méthode PATCH
    app.patch('/chicken/:id', async (req, res) => {
    try {
      const chickenId = req.params.id;
      const update = req.body;
  
      const chicken = await Chicken.findByIdAndUpdate(chickenId, update, {
        new: true,
      });
  
      if (!chicken) {
        return res.status(404).json({ message: 'Chicken non trouvé' });
      }
  
      res.json({ message: 'Chicken mis à jour avec succès', chicken });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du chicken :', error);
      res.status(500).json({ message: 'Une erreur est survenue' });
    }
  });   

// incrémenter la propriété steps de 1 pour un chicken spécifique
  app.patch('/chicken/run/:id', async (req, res) => {
    try {
      const chickenId = req.params.id;
  
      const chicken = await Chicken.findById(chickenId);
  
      if (!chicken) {
        return res.status(404).json({ message: 'Chicken non trouvé' });
      }
  
      chicken.steps += 1;
  
      await chicken.save();
  
      res.json({ message: 'Chicken a couru avec succès', chicken });
    } catch (error) {
      console.error('Erreur lors de la mise à jour des steps du chicken :', error);
      res.status(500).json({ message: 'Une erreur est survenue' });
    }
  });
  
  
// Route pour supprimer un chicken
    app.delete('/chicken/:id', async (req, res) => {
    try {
      const chickenId = req.params.id;
  
      const deletedChicken = await Chicken.findByIdAndRemove(chickenId);
  
      if (!deletedChicken) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'Chicken est supprimé' });
    } catch (error) {
      console.error('Erreur lors de la suppression du chicken', error);
      res.status(500).json({ message: 'Une erreur est survenue' });
    }
  });
   

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });