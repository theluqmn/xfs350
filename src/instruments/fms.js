import { InstrumentFrame } from "./frames";

export default function InsFMS(k, x) {
    InstrumentFrame(k, "FLIGHT MANAGEMENT SYSTEM", x, k.height() - 5, 460, 280);

    fmsDisplay1(k, x);

    k.add([
        k.rect(4, 270),
        k.pos(x + 230, k.height() - 10),
        k.color(20,20,20),
        k.anchor("bot")
    ])

    fmsDisplay2(k, x);
};

function fmsDisplay1(k, x) {
    k.add([
        k.rect(220,270),
        k.pos(x + 5, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);

    fmsHeader(k, x, 1);
};

function fmsDisplay2(k, x) {
    k.add([
        k.rect(220,270),
        k.pos(x + 235, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);

    fmsHeader(k, x, 2);
};

function fmsHeader(k, x, number) {
    if (number == 2) {
        x += 230;
    }

    k.add([
        k.text(`FMS ${number}`, {
            font: "consolas",
            size: 12
        }),
        k.pos(x + 10, k.height() - 265),
        k.color(64,224,208),
        k.anchor("botleft")
    ]);
};