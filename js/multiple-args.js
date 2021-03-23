function getArea(width, length, unit) {

const area = width * length;
  return `${area} ${unit}`;
}
alert(getArea(prompt('Shape width'), prompt('Shape length'), prompt('Units of measurment')));