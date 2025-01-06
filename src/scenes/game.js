import Header from "../components/header"; import InsAutopilot from "../instruments/autopilot";
import InstrumentsFrame from "../instruments/frame";

export function GameScene(k) {
    k.scene("game", () => {
        Header(k);
        InstrumentsFrame(k);
        InsAutopilot(k);
    });
}