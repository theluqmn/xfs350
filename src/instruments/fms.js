export default function InsFMS(k, x) {
    k.add([
        k.rect(460, 280),
        k.pos(x, k.height() - 5),
        k.color(97,113,128),
        k.outline(1, k.rgb(255,255,255)),
        k.anchor("botleft")
    ])

    k.add([
        k.text("FLIGHT MANAGEMENT SYSTEM", {
            font: "consolas",
            size: 10
        }),
        k.pos(x - 2, k.height() - 285),
        k.anchor("botleft")
    ]);

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