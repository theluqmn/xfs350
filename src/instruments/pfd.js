export default function InsPFD(k, x) {
    k.add([
        k.rect(460, 280),
        k.pos(x, k.height() - 5),
        k.color(97,113,128),
        k.outline(1, k.rgb(200,200,200)),
        k.anchor("botleft")
    ])

    k.add([
        k.text("PRIMARY FLIGHT DISPLAYS", {
            font: "consolas",
            size: 10
        }),
        k.pos(x - 2, k.height() - 285),
        k.anchor("botleft")
    ]);

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
    k.add([
        k.rect(220,270),
        k.pos(x + 5, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);
};

function pfd2(k, x) {
    k.add([
        k.rect(220,270),
        k.pos(x + 235, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);
};