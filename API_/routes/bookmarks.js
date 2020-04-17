const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/bookmarks");

router.get("/bookmarks", (req, res) => {
  _controlador
    .consultarbookmarks()
    .then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "bookmarks consultadas" });
    })
    .catch(error => {
      res.send(error);
    });
});

router.post("/bookmarks", (req, res) => {
  try {
    let info_bookmark = req.body;
    _controlador.validarbookmark(info_bookmark);

    _controlador
      .guardarbookmark(info_bookmark)
      .then(respuestaDB => {
        res.send({ ok: true, mensaje: "bookmark guardada", info: info_bookmark });
      })
      .catch(error => {
        res.send(error);
      });

  } catch (error) {
    res.send(error);
  }
});

module.exports = router;    