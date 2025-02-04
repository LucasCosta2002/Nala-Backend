import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Obtener posiciones con detalles de división y tier
// server.get("/api/positions/detailed", (req, res) => {
//   const db = router.db;
//   const positions = db.get("positions").value();
//   const divisions = db.get("divisions").value();
//   const tiers = db.get("tiers").value();

//   const detailedPositions = positions.map(pos => ({
//     ...pos,
//     division: divisions.find(div => div.id === pos.divisionId),
//     tier: tiers.find(tier => tier.id === pos.tierId)
//   }));

//   res.json(detailedPositions);
// });

// Usar el router de JSON Server
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server corriendo en http://localhost:3000");
});
