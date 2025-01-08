import { InstrumentFrame } from "./frames";

export default function InsControls(k, x) {
    InstrumentFrame(k, "THROTTLE", x, k.height() - 5, 100, 280);
};