const ServicioPg = require("../services/postgres");
let validarbookmark = bookmark => {
  if (!bookmark) {
    throw {
      ok: false,
      mensaje: "LLa info del bookmark es obligatoria."
    };
  }

  if (!bookmark.url) {
    throw { ok: false, mensaje: "La info del bookmark es obligatorio." };
  }
  if (!bookmark.nombre) {
    throw { ok: false, mensaje: "La info del bookmark es obligatorio." };
  }
};
let guardarbookmark = async bookmark => {
  let _servicio = new ServicioPg();
  let sql = `INSERT INTO marcadores(id,url,nombre,descripcion)
              VALUES ('1',
                  '${bookmark.url}',
                  '${bookmark.nombre}',
                  '${bookmark.descripcion}');`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarbookmarks = async () => {
  let _servicio = new ServicioPg();
  let sql = `SELECT * FROM marcadores`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

module.exports = { validarbookmark, guardarbookmark, consultarbookmarks };