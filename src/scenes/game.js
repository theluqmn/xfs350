import Header from "../components/header";

export function GameScene(k) {
    k.scene("game", () => {
        Header(k);
    })
}