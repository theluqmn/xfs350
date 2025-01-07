export default function InsControls(k, x) {
    k.add([
        k.rect(280, 280),
        k.pos(x, k.height() - 5),
        k.color(97,113,128),
        k.outline(1, k.rgb(255,255,255)),
        k.anchor("botleft")
    ]);

    k.add([
        k.text("BRAKES, THROTTLE, FLAPS AND ENGINES", {
            font: "consolas",
            size: 10
        }),
        k.pos(x - 2, k.height() - 285),
        k.anchor("botleft")
    ]);
}