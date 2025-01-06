export default function Header(k) {
    const frame = k.add([
        k.rect(k.width(), 30),
        k.pos(0, 0),
        k.color(255,255,255)
    ]);

    const title = k.add([
        k.text("XFS 350", {
            font: "consolas",
            size: 22
        }),
        k.color(0,0,0),
        k.pos(5, 5)
    ]);

    const settings = k.add([
        k.text("Settings", {
            font: "consolas",
            size: 22
        }),
        k.color(0,0,0),
        k.pos(k.width() - 110, 5),
        k.area()
    ]);
    settings.onClick(() => {
        k.go("settings");
    });

    const help = k.add([
        k.text("Help", {
            font: "consolas",
            size: 22
        }),
        k.color(0,0,0),
        k.pos(k.width() - 200, 5),
        k.area()
    ]);
    settings.onClick(() => {
        k.go("help");
    });

    const github = k.add([
        k.text("GitHub", {
            font: "consolas",
            size: 22
        }),
        k.color(0,0,0),
        k.pos(k.width() - 320, 5),
        k.area()
    ]);
    github.onClick(() => {
        open("https://github.com/theluqmn/xfs350", "_blank");
    });
};