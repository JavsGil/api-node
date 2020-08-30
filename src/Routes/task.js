const { Router } = require('express');
const router = Router();
const { TaskController } = require("./../controllers/task.controller");

router.get("/", TaskController.ListTask);
router.post("/", TaskController.PostTask);
router.put("/:id", TaskController.UpdateTask);

module.exports = router;