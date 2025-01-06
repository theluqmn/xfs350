export default function InstrumentsFrame(k) {
    const mainFrame = k.add([
        k.rect(1500,200),
        k.pos(0, k.height()),
        k.color(50,50,50),
        k.anchor("botleft")
    ]);

    const autopilotFrame = k.add([
        k.rect(500,60),
        k.pos(0,k.height() - 190),
        k.color(50,50,50),
        k.anchor("botleft")
    ]);
}