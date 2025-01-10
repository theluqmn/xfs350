import { InstrumentFrame } from "./frames";
import { simData } from "../functions/simEngine";

export default function InsControls(k, x) {
    brakeIndicator(k, x);
    InstrumentFrame(k, "THROTTLE", x + 55, k.height() - 135, 100, 150);
    InstrumentFrame(k, "FLAPS", x + 160, k.height() - 135, 50, 150);
    InstrumentFrame(k, "ENGINES", x, k.height() - 5, 210, 115);
};

function brakeIndicator(k, x) {
    InstrumentFrame(k, "BRAKES", x, k.height() - 135, 50, 150);

    const guide = k.add([
        k.rect(10,130),
        k.pos(x + 25, k.height() - 145),
        k.color(200,200,200),
        k.anchor("bot")
    ]);

    const indicator = k.add([
        k.rect(40,20),
        k.pos(x + 25, k.height() - 145),
        k.color(50,50,50),
        k.anchor("bot")
    ]);

    k.onUpdate(() => {
        indicator.pos.y = k.height() - 145 - (simData.inputs.brakes * 110 / 100);
    })
}