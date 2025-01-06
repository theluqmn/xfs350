export default function InsAutopilot(k) {
    const frame = k.add([
        k.rect(500,60),
        k.pos(0,k.height() - 200),
        k.color(97,113,128),
        k.anchor("botleft")
    ]);

    autopilot(k, "altitude", 5, );
};

function autopilot(k, type, x) {
    const frame = k.add([
        k.rect(80,30),
        k.pos(x,k.height() - 225),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);

    const label = k.add([
        k.text("ALT", {
            font: "consolas",
            size: 11
        }),
        k.pos(x + 40, k.height() - 242),
        k.anchor("bot")
    ]);

    const value = k.add([
        k.text("38000FT", {
            font: "consolas",
            size: 16
        }),
        k.pos(x + 40, k.height() - 225),
        k.anchor("bot")
    ]);
};