app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("api/index", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("api/reserve", function(req, res) {
    return res.json(reserve);
  });

  app.get("/api/:tables", function(req, res) {
    var currentReservations = req.params.character;

    console.log(currentReservations);

  for (var i = 0; i < reserve.length; i++) {
    if (chosen === reserve[i].routeName) {
      return res.json(reserve[i]);
    }
  }

  return res.json(false);
});