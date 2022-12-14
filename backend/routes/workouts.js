const express = require("express");
const router = express.Router();
const {
	createWorkout,
	getWorkout,
	getWorkouts,
	deleteWorkout,
	updateWorkout,
} = require("../controllers/workoutController");

// get all workouts
router.get("/", getWorkouts);

// get single workout

router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

//  delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);
module.exports = router;
