import kaplay from "kaplay";
const k = kaplay();
k.loadRoot("./");

const plane = k.add([
    k.rect(150, 50),
    k.pos(k.width() / 2, k.height() / 2),
    k.anchor("center")
]);