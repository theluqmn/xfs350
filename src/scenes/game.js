import Header from "../components/header";
import InstrumentsFrame from "../components/instruments/frame";

export function GameScene(k) {
    k.scene("game", () => {
        Header(k);
        InstrumentsFrame(k);
    });
}