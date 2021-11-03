export const filters = {
  all: (array) => array,
  fav: (array) => array.filter(item => item.liked),
}