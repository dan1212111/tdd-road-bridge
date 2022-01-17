class RoadBridge {
  constructor() {
    this.carsAlreadyOnBridge = 0;
    this.carsMovingOnBridge = 0;
    this.carsMovingOffBridge = 0;
    this.weather = 20;
    this.carsAlreadyOnBridgeSign = "GO";
    this.carsGoingOnBridgeSign = "GO";
  }

  accidentWarningCarsAlreadyOn(accidentIndicator) {
    if (accidentIndicator === "yes") {
      this.carsGoingOnBridgeSign = "BRIDGE CLOSED DUE TO ACCIDENT";
      return this.carsGoingOnBridgeSign;
    } return this.carsGoingOnBridgeSign
  }

  accidentWarningCarsGoingOn(accidentIndicator) {
    if (accidentIndicator === "yes") {
      this.carsAlreadyOnBridgeSign = "WARNING ACCIDENT";
      return this.carsAlreadyOnBridgeSign;
    } return this.carsAlreadyOnBridgeSign
  }

  getAllCarsOnBridge() {
    const numCars =
      this.carsMovingOnBridge +
      this.carsAlreadyOnBridge -
      this.carsMovingOffBridge;
    if (numCars < this.weather) {
      return numCars;
    } this.carsGoingOnBridgeSign = "STOP BRIDGE REACHED MAX CAPACITY"
    return this.carsGoingOnBridgeSign;
  }
}

module.exports = RoadBridge;
