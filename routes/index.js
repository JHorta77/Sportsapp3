const path = require("path");
const router = require("express").Router()
const msfRoutes = require("./api/msf");
const userRoutes = require("./api/users");

router.use("/api/msf", msfRoutes);
router.use("/api/users", userRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});
module.exports = router;