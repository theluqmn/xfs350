import Header from "../components/header";
import InsAutopilot from "../instruments/autopilot"; import InsFMS from "../instruments/fms";
import InsPFD from "../instruments/pfd";
import InsControls from "../instruments/controls";
import { DeckFrame } from "../instruments/frames";
import EcamControls from "../instruments/ecam";
import LandingGearControls from "../instruments/landing";

export function SimulatorScene(k) {
    k.scene("simulator", () => {
        Header(k);
        DeckFrame(k);
        InsAutopilot(k);
        InsPFD(k, 5);
        InsControls(k, 470);
        EcamControls(k, 685);
        LandingGearControls(k, 920);
        InsFMS(k, 975);
    });
}