export function HomeScene(k) {
    k.scene("home", () => {
        const title = k.add([
            k.text("XFS350", {
                font: "consolas",
                size: 50
            }),
            k.pos(100,100)
        ]);

        k.add([
            k.text(`
This project is still a work in progress.
I decided to make this public and submit to get feedback
on the overall design and experience of the simulator.

Physics not yet implemented, as I would
like to focus on the UI and UX of the simulator.

This simulator has some bug with the texts and its
due to a faulty commit on the game engine I am using.

W/S - throttle
Q/A - flaps
E/D - brakes
left/right arrows - elevators
up/down arrows - elevators (precise)

Please share your feedback!
SPACE TO START`, {
            font: "consolas",
                size: 15,
                width: 600
        }),
            k.pos(100, 150),
            k.color(255,255,255)
        ]);
    
        k.onKeyDown("space", () => {
            k.go("simulator");
        });
    });
};