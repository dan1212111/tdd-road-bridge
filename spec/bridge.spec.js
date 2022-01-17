const RoadBridge = require("../src/bridge.js");

describe("roadBridge", () => {
  let roadBridge;

  beforeEach(() => {
    roadBridge = new RoadBridge();
  });


  it("get all cars on bridge", () => {
    // set up
    
    roadBridge.carsMovingOnBridge = 20
    roadBridge.carsMovingOffBridge = 12
    roadBridge.carsAlreadyOnBridge = 10
    

    // execute
    const result = roadBridge.getAllCarsOnBridge() 

    // verify
    expect(result).toEqual(18);
  })

  it("bridge capacity in good weather ", () => {
    // set up
    
    roadBridge.weather = 54

    roadBridge.carsMovingOnBridge = 40
    roadBridge.carsMovingOffBridge = 12
    roadBridge.carsAlreadyOnBridge = 20
    

    // execute
    const weatherCondition = roadBridge.getAllCarsOnBridge()

    // verify
    expect(weatherCondition).toEqual(48);
  }) 

  it("bridge capacity in good weather ", () => {
    // set up
    
    roadBridge.weather = 54

    const fullCapacity = "STOP BRIDGE REACHED MAX CAPACITY"

    roadBridge.carsMovingOnBridge = 34
    roadBridge.carsMovingOffBridge = 10
    roadBridge.carsAlreadyOnBridge = 30
    

    // execute
    const result = roadBridge.getAllCarsOnBridge()

    // verify
    expect(result).toEqual(fullCapacity);
  }) 

  it("bridge capacity in mild weather ", () => {
    // set up
    
    roadBridge.weather = 34

    roadBridge.carsMovingOnBridge = 20
    roadBridge.carsMovingOffBridge = 10
    roadBridge.carsAlreadyOnBridge = 15
    

    // execute
    const weatherCondition = roadBridge.getAllCarsOnBridge()

    // verify
    expect(weatherCondition).toEqual(25);
  }) 

  it("bridge capacity in mild weather ", () => {
    // set up
    
    roadBridge.weather = 34

    const fullCapacity = "STOP BRIDGE REACHED MAX CAPACITY"

    roadBridge.carsMovingOnBridge = 29
    roadBridge.carsMovingOffBridge = 10
    roadBridge.carsAlreadyOnBridge = 15
    

    // execute
    const result = roadBridge.getAllCarsOnBridge()

    // verify
    expect(result).toEqual(fullCapacity);
  }) 

  it("bridge capacity in severe weather ", () => {
    // set up
    
    roadBridge.weather = 15

    roadBridge.carsMovingOnBridge = 10
    roadBridge.carsMovingOffBridge = 6
    roadBridge.carsAlreadyOnBridge = 5
    

    // execute
    const weatherCondition = roadBridge.getAllCarsOnBridge()

    // verify
    expect(weatherCondition).toEqual(9);
  }) 

  it("bridge capacity in severe weather ", () => {
    // set up
    
    roadBridge.weather = 15

    const fullCapacity = "STOP BRIDGE REACHED MAX CAPACITY"

    roadBridge.carsMovingOnBridge = 11
    roadBridge.carsMovingOffBridge = 6
    roadBridge.carsAlreadyOnBridge = 10

    // execute
    const result = roadBridge.getAllCarsOnBridge()

    // verify
    expect(result).toEqual(fullCapacity);
  }) 

  it("close the bridge, accident!", () => {
    // set up
    const stopAccident = "BRIDGE CLOSED DUE TO ACCIDENT"
    const getOffBridge = "WARNING ACCIDENT"

    // execute
    const result = roadBridge.accidentWarningCarsAlreadyOn("yes")
    const resultOne = roadBridge.accidentWarningCarsGoingOn("yes")

    // verify
    expect(result).toEqual(stopAccident);
    expect(resultOne).toEqual(getOffBridge);

  })  

  it("reopen the bridge!", () => {
    // set up
    const clearBridge = "GO"

    // execute
    const result = roadBridge.accidentWarningCarsAlreadyOn("no")
    const resultOne = roadBridge.accidentWarningCarsGoingOn("no")

    // verify
    expect(result).toEqual(clearBridge);
    expect(resultOne).toEqual(clearBridge);

  })  
});