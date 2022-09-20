const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const logger = require("../utils/logger");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const middleware = require("../utils/middleware");
// const getTokenFrom = (req) => {
//   const authorization = req.get("authorization");
//   if (authorization && authorization.toLowerCase().startsWith("bearer")) {
//     return authorization.substring(7);
//   }

//   return null;
// };

blogsRouter.get("/", async (req, res) => {
  let blogs = await Blog.find({}).populate("user", { username: 1, name: 1 });

  res.json(blogs);
});

blogsRouter.get("/:id", async (req, res) => {
  let blog = await Blog.findById(req.params.id).populate("user", {
    username: 1,
    name: 1,
  });

  res.json(blog);
});

blogsRouter.post(
  "/",
  middleware.tokenExtractor,
  middleware.userExtractor,
  async (req, res) => {
    let body = req.body;
    // const token = getTokenFrom(req);
    const { title, content } = body;

    const token = req.token;

    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!decodedToken.id) {
      return res.status(401).json({ error: "Missing token or invalid" });
    }

    if (!title || !content) {
      return res.status(400).json({ error: "Title / Content missing" });
    } else {
      const user = await User.findById(decodedToken.id);

      let blog = new Blog({
        title: body.title,
        content: body.content,
        likes: body.likes || 0,
        user: user._id,
      });

      try {
        const savedBlog = await blog.save();
        user.blogs = user.blogs.concat(savedBlog._id);
        await user.save();
        res.status(201).json(savedBlog);
      } catch (err) {
        return res
          .status(400)
          .json({ error: "Failed to publish your blog post.Try again." });
      }
    }
  }
);

blogsRouter.delete(
  "/:id",
  middleware.tokenExtractor,
  middleware.userExtractor,
  async (req, res) => {
    let id = req.params.id;

    let blog = await Blog.findById(id);

    let token = req.token;

    let decodedToken = jwt.verify(token, process.env.SECRET);

    if (decodedToken.id.toString() === blog.user.toString()) {
      // if (req.user.toString() === blog.user.toString()) {
      let item = await Blog.findByIdAndDelete(id);
      res.status(204).json(item);
    } else {
      res
        .status(400)
        .json({ error: "Only the creator of the blog can delete the content" });
    }
  }
);

blogsRouter.put("/:id", async (req, res) => {
  let id = req.params.id;

  let body = req.body;

  let username = body.username;

  let existingItem = await Blog.findById(id);

  if (existingItem.likersList.includes(username)) {
    existingItem.likes = existingItem.likes - 1;
    let index = existingItem.likersList.indexOf(username);
    if (index > -1) {
      existingItem.likersList.splice(index, 1);
    }
  } else {
    existingItem.likes = existingItem.likes + 1;
    existingItem.likersList.push(username);
  }

  let updatedBlog = await Blog.findByIdAndUpdate(id, existingItem, {
    new: true,
    runValidators: true,
  });

  res.status(201).json(updatedBlog.toJSON());
});

module.exports = blogsRouter;
