export default function InsAutopilot(k) {
    const frame = k.add([
        k.rect(500,60),
        k.pos(0,k.height() - 200),
        k.color(97,113,128),
        k.anchor("botleft")
    ]);

    instrument(k, "altitude", 5, );
};

function instrument(k, type, x) {
    const frame = k.add([
        k.rect(120,30),
        k.pos(x,k.height() - 225),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);

};