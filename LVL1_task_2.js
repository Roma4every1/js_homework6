let canReachPump = (distance, milesPerGallon, gallons) => {
  if (distance - milesPerGallon * gallons >= 0) return true;
  return false;
};
console.log(canReachPump(50, 25, 2));
