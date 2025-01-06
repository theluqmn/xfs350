export default function InsAutopilot(k) {
    const frame = k.add([
        k.rect(500,60),
        k.pos(0,k.height() - 200),
        k.color(97,113,128),
        k.anchor("botleft")
    ]);

    autopilot(k, "alt", 5);
    autopilot(k, "vs", 95);
    autopilot(k, "spd", 185);
};

function autopilot(k, type, x) {
    let label;

    if (type == "alt") {
        label = "ALT";
    } else if (type == "vs") {
        label = "VS";
    } else if (type == "spd") {
        label = "SPD";
    };

    k.add([
        k.rect(80,30, {
            radius: 5
        }),
        k.pos(x,k.height() - 225),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);

    k.add([
        k.text(label, {
            font: "consolas",
            size: 12
        }),
        k.color(225,225,225),
        k.pos(x + 40, k.height() - 241),
        k.anchor("bot")
    ]);

    const value = k.add([
        k.text("---", {
            font: "consolas",
            size: 16
        }),
        k.pos(x + 40, k.height() - 225),
        k.anchor("bot")
    ]);

    const radio = k.add([
        k.circle(10),
        k.pos(x + 40, k.height() - 202),
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