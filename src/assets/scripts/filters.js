export const filters = {
  all: (array) => array,
  fav: (array) => array.filter(item => item.liked),
  // search: (array, keyword) => array.filter(item => item.title.match(keyword))
}