const marvelComicsMock = require("../mock/marvelComicsMock.js");
const getComics = (req, res) => {
  const comics = marvelComicsMock.data.results;

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 14;
  const search = req.query.search ? req.query.search.toLowerCase() : "";

  let filteredComics = comics;
  if (search) {
    filteredComics = comics.filter((comic) =>
      comic.title.toLowerCase().includes(search)
    );
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const rareIndexes = new Set();
  while (rareIndexes.size < 10 && rareIndexes.size < comics.length) {
    const randomIndex = Math.floor(Math.random() * comics.length);
    rareIndexes.add(randomIndex);
  }

  const comicsRareFlag = filteredComics.map((comic, index) => ({
    ...comic,
    isRare: rareIndexes.has(index),
  }));

  const paginatedComics = comicsRareFlag.slice(startIndex, endIndex);

  res.json({
    code: marvelComicsMock.code,
    status: marvelComicsMock.status,
    total: filteredComics.length,
    page,
    limit,
    data: {
      ...marvelComicsMock.data,
      results: paginatedComics,
    },
  });
};

module.exports = getComics;
