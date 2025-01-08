export default function InsAutopilot(k) {
    autopilot(k, "alt", 5);
    autopilot(k, "vs", 95);
    autopilot(k, "spd", 185);

    k.add([
        k.text("AUTOPILOT", {
            font: "consolas",
            size: 12
        }),
        k.pos(430, k.height() - 340),
        k.anchor("botleft")
    ]);
};

function autopilot(k, type, x) {
    let label;

    if (type == "alt") {
        label = "ALT";
    } else if (type == "vs") {
        label = "V/S";
    } else if (type == "spd") {
        label = "SPD";
    };

    k.add([
        k.rect(80,30, {
            radius: 5
        }),
        k.pos(x, k.height() - 325),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);

    k.add([
        k.text(label, {
            font: "consolas",
            size: 12
        }),
        k.color(225,225,225),
        k.pos(x + 40, k.height() - 341),
        k.anchor("bot")
    ]);

    const value = k.add([
        k.text("---", {
            font: "consolas",
            size: 16
        }),
        k.pos(x + 40, k.height() - 325),
        k.anchor("bot")
    ]);

    const radio = k.add([
        k.circle(10),
        k.pos(x + 40, k.height() - 302),
        k.anchor("bot"),
        k.scale(1),
        k.area()
    ]);

    radio.onClick(() => {
        radio.scaleTo(0.95)
        setTimeout(() => {
            radio.scaleTo(1)
        }, 100);
    });
};