// middleware/upload.js
const multer = require("multer");

// Configuration du stockage en mémoire
const storage = multer.memoryStorage();

// Limite de taille et type MIME
const upload = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024,  // Limite à 10 Mo
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
            return cb(new Error("Only .jpg and .png images are allowed"), false);
        }
        cb(null, true);
    }
});

module.exports = upload;
