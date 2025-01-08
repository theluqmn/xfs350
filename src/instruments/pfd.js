import { InstrumentFrame } from "./frames";

export default function InsPFD(k, x) {
    InstrumentFrame(k, "PRIMARY FLIGHT DISPLAYS", x, k.height() - 5, 460, 280);

    pfd1(k, x);

    k.add([
        k.rect(4, 270),
        k.pos(x + 230, k.height() - 10),
        k.color(20,20,20),
        k.anchor("bot")
    ])

    pfd2(k, x);
};

function pfd1(k, x) {
    const display = k.add([
        k.rect(220,270),
        k.pos(x + 5, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);

    const speed = k.add([
        k.rect(40,160),
        k.pos(x + 10, k.height() - 70),
        k.color(105,108,146),
        k.anchor("botleft")
    ])

    const air = k.add([
        k.rect(120,80),
        k.pos(x + 55, k.height() - 150),
        k.color(2,103,238),
        k.anchor("botleft")
    ])

    const ground = k.add([
        k.rect(120,80),
        k.pos(x + 55, k.height() - 70),
        k.color(151,71,16),
        k.anchor("botleft")
    ])

    const alt = k.add([
        k.rect(40,160),
        k.pos(x + 180, k.height() - 70),
        k.color(105,108,146),
        k.anchor("botleft")
    ])
};

function pfd2(k, x) {
    const display = k.add([
        k.rect(220,270),
        k.pos(x + 235, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);
};