const db = require("../models");
const express = require("express");
const router = express.Router();

//this should return all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout =>  { res.json(dbWorkout); })
    .catch(err => { res.json(err); });
});

//this should create a new workout
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => { res.json(dbWorkout); })
    .catch(err => { res.json(err); });
});

//this should find a workout and updates it with the new exercise information
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body }},
    { new: true })
    .then(dbWorkout => { res.json(dbWorkout); })
    .catch(err => { res.json(err); });
});

//this should return all workouts for stats page
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => { res.json(dbWorkout); })
    .catch(err => { res.json(err); });
});
  
module.exports = router;