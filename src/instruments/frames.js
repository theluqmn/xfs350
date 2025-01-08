export function DeckFrame(k) {
    const mainFrame = k.add([
        k.rect(1500,300),
        k.pos(0, k.height()),
        k.color(97,113,128),
        k.anchor("botleft")
    ]);
};

export function InstrumentFrame(k, x, y, w, h) {
    k.add([
        k.rect(w,h),
        k.pos(x,y),
        k.color(97,113,128),
        k.outline(1, k.rgb(255,255,255)),
        k.anchor("botleft")
    ]);
}