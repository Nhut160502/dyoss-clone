export const index = (req, res, next) => {
  try {
    res.json({ success: true });
  } catch (error) {}
};
