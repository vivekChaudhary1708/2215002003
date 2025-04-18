import User from '../models/User.js';
import Post from '../models/Post.js';

export const getTopUsers = async (req, res) => {
  const topUsers = await User.find().sort({ 'posts': -1 }).limit(10);
  res.json(topUsers);
};

export const getPopularPosts = async (req, res) => {
  const popularPosts = await Post.find().sort({ 'likes': -1 }).limit(10);
  res.json(popularPosts);
};

export const getLatestPosts = async (req, res) => {
  const latestPosts = await Post.find().sort({ 'createdAt': -1 }).limit(10);
  res.json(latestPosts);
};
