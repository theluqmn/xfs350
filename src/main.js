import kaplay from "kaplay";
const k = kaplay({
    background: [0,0,0]
});
k.loadRoot("./");

import { HomeScene } from "./scenes/home";
import { GameScene } from "./scenes/game";
HomeScene(k); GameScene(k);

k.go("game");