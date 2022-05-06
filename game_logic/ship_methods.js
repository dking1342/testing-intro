

const checkForShip = (player, coordinates) => {
  let { ships } = player;

  let ship = ships
    .flatMap((ship) => {
      let { locations } = ship;
      let finder = locations.find(
        (location) =>
          location[0] === coordinates[0] && location[1] == coordinates[1]
      );
      return finder && { locations: [...finder] };
    })
    .filter((item) => item);
  return !ship.length ? false : true;
};

const damageShip = (ship, coordinates) => {
  let damageShipOutput = ship;
  damageShipOutput.damage.push(coordinates);
  return damageShipOutput;
};

const fire = (player, coordinates = null) => {
  if(!coordinates) throw Error("You do not have any coordinates");
  if (checkForShip(player, coordinates)) {
    return damageShip(player.ships[0], coordinates);
  }
  return player;
};

const takeTurn = (player, guess) => {
  const coordinate = guess();
  fire(player, coordinate);
  return false;
}

export { checkForShip, damageShip, fire, takeTurn };
