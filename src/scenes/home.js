export function HomeScene(k) {
    k.scene("home", () => {
        const title = k.add([
            k.text("XFS350", {
                font: "consolas",
                size: 50
            }),
            k.pos(100,100)
        ]);
    });
};