var express = require("express");
const pedidoController = require('../controllers/pedido.controller');

const router = express.Router();

router.get("/pedidos/metrics", pedidoController.metrics);
router.post("/pedidos/save",    pedidoController.salvarPedido);

module.exports = router;