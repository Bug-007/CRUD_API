const { Router } = require("express");
const controller = require("../controller/controllerContactDetail");
const router = Router();

router.get("/getall", controller.getAllContacts);
router.post("/create", controller.createContact);
router.put("/update", controller.updateContact);
router.delete("/delete", controller.deleteContact)

module.exports = router;
