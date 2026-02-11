const app = require("./src/app");
const { connectDb } = require("./src/utils/db");

const PORT = process.env.PORT || 4000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed. Running in memory mode.", err.message);
    app.listen(PORT, () => {
      console.log(`API running on port ${PORT} without DB`);
    });
  });
