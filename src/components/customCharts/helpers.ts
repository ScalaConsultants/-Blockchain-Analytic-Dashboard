export const getClickPosition = (e: any, canvas: any) => ({
  x: e.pageX - canvas.offsetLeft,
  y: e.pageY - canvas.offsetTop
});
