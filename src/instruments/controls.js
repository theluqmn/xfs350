import { InstrumentFrame } from "./frames";
import { simData } from "../functions/simEngine";

export default function InsControls(k, x) {
    brakeIndicator(k, x);
    throttleIndicator(k, x);
    flapsIndicator(k, x);
    InstrumentFrame(k, "ENGINES", x, k.height() - 5, 210, 115);
};

function brakeIndicator(k, x) {
    InstrumentFrame(k, "BRAKES", x, k.height() - 135, 50, 150);

    const guide = k.add([
        k.rect(5,80),
        k.pos(x + 25, k.height() - 145),
        k.color(20,20,20),
        k.anchor("bot")
    ]);

    const indicator = k.add([
        k.rect(40,20),
        k.pos(x + 25, k.height() - 145),
        k.color(50,50,50),
        k.anchor("bot")
    ]);

    k.onUpdate(() => {
        indicator.pos.y = k.height() - 145 - (simData.inputs.brakes * 60 / 100);
    });
};

function throttleIndicator(k, x) {
    InstrumentFrame(k, "THROTTLE", x + 55, k.height() - 135, 100, 150);

    const guideLeft = k.add([
        k.rect(5,130),
        k.pos(x + 82, k.height() - 145),
        k.color(20,20,20),
        k.anchor("bot")
    ]);

    const guideRight = k.add([
        k.rect(5,130),
        k.pos(x + 128, k.height() - 145),
        k.color(20,20,20),
        k.anchor("bot")
    ]);

    const indicatorLeft = k.add([
        k.rect(40,25),
        k.pos(x + 82, k.height() - 145),
        k.color(50,50,50),
        k.anchor("bot")
    ]);

    const indicatorRight = k.add([
        k.rect(40,25),
        k.pos(x + 128, k.height() - 145),
        k.color(50,50,50),
        k.anchor("bot")
    ]);

    k.onUpdate(() => {
        indicatorLeft.pos.y = k.height() - 145 - (simData.inputs.throttle * 110 / 100);
        indicatorRight.pos.y = k.height() - 145 - (simData.inputs.throttle * 110 / 100);
    });
};

export function flapsIndicator(k, x) {
    InstrumentFrame(k, "FLAPS", x + 160, k.height() - 135, 50, 150);

    const guide = k.add([
        k.rect(5,80),
        k.pos(x + 185, k.height() - 145),
        k.color(20,20,20),
        k.anchor("bot")
    ]);

    const indicator = k.add([
        k.rect(40,20),
        k.pos(x + 185, k.height() - 145),
        k.color(50,50,50),
        k.anchor("bot")
    ]);

    k.onUpdate(() => {
        indicator.pos.y = k.height() - 145 - (simData.inputs.flaps * 60 / 40);
    });
}