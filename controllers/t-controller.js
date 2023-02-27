const { User, Thought } = require('../models');

const thoughtController = {
  // get all thoughts
  getAllThought: function(req, res) {
    Thought.find({})
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(function(dbThoughtData) {
        res.json(dbThoughtData);
      })
      .catch(function(err) {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one thought by id
  getThoughtById: function(req, res) {
    const { id } = req.params;
    Thought.findOne({ _id: id })
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(function(dbThoughtData) {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thoughts found with that id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(function(err) {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create a thought
  createThought: function(req, res) {
    const { body } = req;
    Thought.create(body)
      .then(function(dbThoughtData) {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then(function(dbUserData) {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(function(err) {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // update a thought by id
  updateThought: function(req, res) {
    const { id } = req.params;
    const { body } = req;
    Thought.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true })
      .then(function(dbThoughtData) {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thoughts found with that id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(function(err) {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // delete a thought by id
  deleteThought: function(req, res) {
    const { id } = req.params;
    Thought.findOneAndDelete({ _id: id })
      .then(function(dbThoughtData) {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thoughts found with that id!' });
          return;
        }
        return User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { thoughts: id } },
          { new: true }
        );
      })
      .then(function(dbUserData) {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(function(err) {
        console.log(err);
        res.sendStatus(400);
      });
  },

