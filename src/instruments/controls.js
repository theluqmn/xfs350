import { InstrumentFrame } from "./frames";

export default function InsControls(k, x) {
    InstrumentFrame(k, "BRAKES", x, k.height() - 135, 50, 150);
    InstrumentFrame(k, "THROTTLE", x + 55, k.height() - 135, 100, 150);
    InstrumentFrame(k, "FLAPS", x + 160, k.height() - 135, 50, 150);
    InstrumentFrame(k, "ENGINES", x, k.height() - 5, 210, 115);
};