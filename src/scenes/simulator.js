import Header from "../components/header";
import { DeckFrame } from "../instruments/frames";
import InsAutopilot from "../instruments/autopilot";
import InsPFD from "../instruments/pfd"; import InsControls from "../instruments/controls";
import EcamControls from "../instruments/ecam"; import LandingGearControls from "../instruments/landing";
import InsFMS from "../instruments/fms";

import { SimEngine } from "../functions/simEngine";

export function SimulatorScene(k) {
    k.scene("simulator", () => {
        // Plane
        k.loadSprite("plane", "src/assets/a350.png");
        k.add([
            k.sprite("plane"),
            k.pos(k.width() / 2, k.height() / 2.5),
            k.scale(0.2),
            k.anchor("center")
        ])

        // Load the instruments
        Header(k);
        DeckFrame(k);
        InsAutopilot(k);
        InsPFD(k, 5);
        InsControls(k, 470);
        EcamControls(k, 685);
        LandingGearControls(k, 920);
        InsFMS(k, 975);

        // Engine
        SimEngine(k);
    });
};