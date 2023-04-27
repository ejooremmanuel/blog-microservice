const router = require("express").Router();

const { randomBytes } = require("crypto");

const comments = [];

router.post("/:id/comment", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const comment = {
    commentId,
    title: req.body.title,
    postId: req.params.id,
  };

  comments.push(comment);

  return res.status(200).json({
    data: comment,
    success: true,
    message: "comment added successfully",
  });
});
router.get("/", async (req, res) => {
  return res.status(200).json({
    data: comments,
    success: true,
  });
});
router.get("/:id/comments", async (req, res) => {
  const foundComments = comments.filter((c) => c.postId == req.params.id);

  return res.status(200).json({
    data: foundComments,
    success: true,
  });
});

module.exports = router;
