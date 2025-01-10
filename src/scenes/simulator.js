import Header from "../components/header";
import { DeckFrame } from "../instruments/frames";
import InsAutopilot from "../instruments/autopilot";
import InsPFD from "../instruments/pfd"; import InsControls from "../instruments/controls";
import EcamControls from "../instruments/ecam"; import LandingGearControls from "../instruments/landing";
import InsFMS from "../instruments/fms";

import { SimEngine } from "../functions/simEngine";
import { simData } from "../functions/simEngine";

export function SimulatorScene(k) {
    k.scene("simulator", () => {
        // Runway
        const runway = k.add([
            k.rect(k.width(), 100),
            k.pos(0, k.height() / 2.2),
            k.color(20,20,20),
            k.anchor("left")
        ]);

        // Plane
        k.loadSprite("plane", "src/assets/a350.png");
        const plane = k.add([
            k.sprite("plane"),
            k.pos(k.width() / 2, k.height() / 2.5),
            k.scale(0.2),
            k.anchor("center")
        ]);

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

        k.onUpdate(() => {
            plane.angle =  0 - simData.plane.pitch
            runway.pos.y = (k.height() / 2.2 + simData.plane.altitude)
        })
    });
};