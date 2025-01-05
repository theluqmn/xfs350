import kaplay from "kaplay";
const k = kaplay({
    background: [0,0,0]
});
k.loadRoot("./");

import { HomeScene } from "./scenes/home";
HomeScene(k);

k.go("home");