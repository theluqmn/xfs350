import { InstrumentFrame } from "./frames";

export default function EcamControls(k, x) {
    InstrumentFrame(k, "ECAM / GENERAL PURPOSE DISPLAY", x, k.height() - 5, 230, 280);

    k.add([
        k.rect(220,270),
        k.pos(x + 5, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);
};