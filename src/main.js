import kaplay from "kaplay";
const k = kaplay({
    background: [0,0,0]
});
k.loadRoot("./");

import { HomeScene } from "./scenes/home"; import { SimulatorScene } from "./scenes/simulator";
HomeScene(k); SimulatorScene(k);

k.go("simulator");