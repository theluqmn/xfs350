import Header from "../components/header";
import InsAutopilot from "../instruments/autopilot"; import InsFMS from "../instruments/fms";
import InsPFD from "../instruments/pfd";
import InsControls from "../instruments/controls";
import { DeckFrame } from "../instruments/frames";

export function SimulatorScene(k) {
    k.scene("simulator", () => {
        Header(k);
        DeckFrame(k);
        InsAutopilot(k);
        InsPFD(k, 5);
        InsControls(k, 470);
        InsFMS(k, 815);
    });
}