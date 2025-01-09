import Header from "../components/header";
import { DeckFrame } from "../instruments/frames";
import InsAutopilot from "../instruments/autopilot";
import InsPFD from "../instruments/pfd"; import InsControls from "../instruments/controls";
import EcamControls from "../instruments/ecam"; import LandingGearControls from "../instruments/landing";
import InsFMS from "../instruments/fms";

export function SimulatorScene(k) {
    k.scene("simulator", () => {
        // Load the instruments
        Header(k);
        DeckFrame(k);
        InsAutopilot(k);
        InsPFD(k, 5);
        InsControls(k, 470);
        EcamControls(k, 685);
        LandingGearControls(k, 920);
        InsFMS(k, 975);


    });
};