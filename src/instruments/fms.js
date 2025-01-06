export default function InsFMS(k, x) {
    k.add([
        k.rect(460, 280),
        k.pos(x, k.height() - 5),
        k.color(97,113,128),
        k.outline(1, k.rgb(255,255,255)),
        k.anchor("botleft")
    ])

    k.add([
        k.text("FMS", {
            font: "consolas",
            size: 12
        }),
        k.pos(x - 2, k.height() - 285),
        k.anchor("botleft")
    ]);

    const fms1 = k.add([
        k.rect(220,270),
        k.pos(x + 5, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);

    k.add([
        k.rect(4, 270),
        k.pos(x + 230, k.height() - 10),
        k.color(20,20,20),
        k.anchor("bot")
    ])

    const fms2 = k.add([
        k.rect(220, 270),
        k.pos(x + 235, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);
};