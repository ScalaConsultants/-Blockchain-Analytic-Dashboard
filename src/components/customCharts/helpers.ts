export const getClickPosition = (e: any, canvas: any) => ({
  x: e.pageX - canvas.offsetLeft,
  y: e.pageY - canvas.offsetTop
});

export const drawLine = (x1: number, y1: number, x2: number, y2: number, ctx: any, color = 'black') => {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};
