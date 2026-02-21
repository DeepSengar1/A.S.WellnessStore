import express from "express";
import { supabase } from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Test Supabase connection
app.get("/products", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .limit(1);
    if (error) throw error;
    res.json({ message: "Supabase connected successfully!", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error)
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
