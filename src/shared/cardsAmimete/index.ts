export const entreScreen = ({ index }: { index: number }) => {
  const grids = document.querySelectorAll(".grids");

  let grid = grids[index];
  let columns = grid.querySelectorAll(".Column");

  columns.forEach((value) => {
    value.classList.remove("animate-before");
  });
};
