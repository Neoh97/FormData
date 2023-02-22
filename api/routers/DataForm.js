const express = require("express");
const router = express.Router();
const verifyToken = require("../Meddleware/verifyToken");

const {
  // getUsers,
  // getUser,
  // updateUser,
  // getToken,
  uploadData,
} = require("../controller/DataForm");


// router.delete("/:id", deleteUser);
// router.get("/", getUsers);
// router.get("/", getToken);
router.post("/", verifyToken, uploadData);
// router.put("/:id", updateUser);



module.exports = router;
