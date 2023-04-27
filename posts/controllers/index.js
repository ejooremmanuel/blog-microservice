const router = require("express").Router();

const { randomBytes } = require("crypto");

const posts = [];

router.post("/", async (req, res) => {
  const postId = randomBytes(4).toString("hex");
  const newPost = {
    postId,
    title: req.body.title,
  };

  posts.push(newPost);

  return res.status(200).json({
    data: newPost,
    success: true,
    message: "Post created successfully",
  });
});
router.get("/", async (req, res) => {
  return res.status(200).json({
    data: posts,
    success: true,
  });
});

module.exports = router;
