const express = require("express");
const {
    mostrarProductos,
    agregarProducto,
    eliminarProducto,
    editarProductoForm,
    editarProducto,
} = require("../controller/productosController");

const router = express.Router();

router.get("/", mostrarProductos);
router.post("/", agregarProducto);
router.get("/eliminar/:id", eliminarProducto);
router.get("/editar/:id", editarProductoForm);
router.post("/editar/:id", editarProducto);

module.exports = router;
