const MethodCharacters = {};
const charactersModel = require('../models/characters.model');
const CharactersModel = require('../models/characters.model');

// Obtener lista de personajes.
MethodCharacters.getCharacters = async (__, res) => {
    try {
        const characters = await CharactersModel.find({}, { name: 1, imagenUrl: 1 });
        res.status(200).json(characters);
    } catch (err) {
        res.status(500).json('INTERNAL SERVER ERROR 500');
    }
};

// Agregar nuevo personaje.
MethodCharacters.newCharacter = async (req, res) => {
    try {
        const {
            imagenUrl, name, age, weight, history, moviesAndSeries,
        } = req.body;
        const newCharacter = await new CharactersModel({
            imagenUrl,
            name,
            age,
            weight,
            history,
            moviesAndSeries,
        });
        await newCharacter.save();
        res.status(201).json(`Personaje ${name} creado exitosamente`);
    } catch (err) {
        res.status(500).json('INTERNAL SERVER ERROR 500');
    }
};

// Editar personaje.
MethodCharacters.editCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        await charactersModel.findByIdAndUpdate(id, req.body);
        res.json(`Se actualizo correctamente el personaje ${req.body.name}`);
    } catch (err) {
        console.log(err);
        res.status(500).json('INTERNAL SERVER ERROR 500');
    }
};

MethodCharacters.delCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        await charactersModel.findByIdAndDelete(id);
        res.status(201).json('Se elimino exitosamente el personaje');
    } catch (err) {
        console.log(err);
        res.status(500).json('INTERNAL SERVER ERROR 500');
    }
};
module.exports = MethodCharacters;
