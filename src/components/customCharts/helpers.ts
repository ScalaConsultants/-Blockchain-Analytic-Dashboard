export const getClickPosition = (e: any, canvas: any) => ({
  x: e.pageX - canvas.offsetLeft,
  y: e.pageY - canvas.offsetTop
});

export const drawLine = (
  ctx: any,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color = 'black',
) => {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};

export const setFontStyle = (
  ctx: any,
  size = 12,
  color = 'black',
  font = 'Arial',
) => {
  ctx.fillStyle = color;
  ctx.font = `${size}px ${font}`;
};
