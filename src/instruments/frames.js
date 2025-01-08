// Contains the frames for the instruments

export function DeckFrame(k) {
    const mainFrame = k.add([
        k.rect(1500,300),
        k.pos(0, k.height()),
        k.color(97,113,128),
        k.anchor("botleft")
    ]);
};

export function InstrumentFrame(k, label, x, y, w, h) {
    k.add([
        k.rect(w,h),
        k.pos(x,y),
        k.color(97,113,128),
        k.outline(1, k.rgb(255,255,255)),
        k.anchor("botleft")
    ]);

    k.add([
        k.text(label, {
            font: "consolas",
            size: 12
        }),
        k.color(225,225,225),
        k.pos(x + 10, y - 10),
        k.anchor("botleft")
    ]);
};

export function AutopilotFrame() {
    k.add([
        k.rect(500,60),
        k.pos(0,k.height() - 300),
        k.color(107,123,138),
        k.anchor("botleft")
    ]);
};