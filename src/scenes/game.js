import Header from "../components/header";
import InsAutopilot from "../instruments/autopilot"; import InsFMS from "../instruments/fms";
import InstrumentsFrame from "../instruments/frame"; import InsPFD from "../instruments/pfd";

export function GameScene(k) {
    k.scene("game", () => {
        Header(k);
        InstrumentsFrame(k);
        InsAutopilot(k);
        InsFMS(k, 500);
        InsPFD(k, 5);
    });
}