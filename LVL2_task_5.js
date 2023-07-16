let isFire = (candles, debris) => {
  fallenCandles = 0;
  for (let i = 0; i < debris.length; i++) {
    fallenCandles += debris.charCodeAt(i);
  }
  if (fallenCandles > candles * 0.7)
    return `Fire!, because ${fallenCandles} out of ${candles} candles fell`;
  return `That was close!, because ${fallenCandles} out of ${candles} candles fell`;
};
console.log(isFire(800, "beware"));
