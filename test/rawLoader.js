module.exports = {
  process: (content) => {
    return (
      'module.exports = ' +
      JSON.stringify({
        default: content,
      })
    );
  },
};
