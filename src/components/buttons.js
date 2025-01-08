export function ButtonText(k, text, align, x, y, onclick) {
    const button = k.add([
        k.text(text, {
            font: "consolas",
            size: 12,
            align: align
        }),
        k.color(93,173,226),
        k.pos(x, y),
        k.anchor("botleft"),
        k.area()
    ]);

    button.onClick(() => {
        onclick();
    });

    return button;
};