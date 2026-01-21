import express from "express"; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: "User services se hoon main",
  });
});
 

 
export default app;
