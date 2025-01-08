import { InstrumentFrame } from "./frames";

export default function EcamControls(k, x) {
    const mode = "general";
    const page = "home";
    const data = {
        general: {
            home: {
                title: "HOME",
                text: "Welcome to XFS 350.\nThis display mode for the ECAM display does not exist in the real aircraft - this is designed to assist you with the simulator using guides and various controls.\nText highlighted as blue performs an action when clicked.",
                buttons: {
                    "1": "General",
                    "2": "Systems",
                    "3": "Navigation",
                    "4": "Flight"
                }
            }
        }
    };

    InstrumentFrame(k, "ECAM/GENERAL PURPOSE DISPLAY", x, k.height() - 5, 230, 280);

    const display = k.add([
        k.rect(220,270),
        k.pos(x + 5, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);


    const title = k.add([
        k.text("GENERAL - HOME", {
            font: "consolas",
            size: 14,
        }),
        k.pos(x + 10, k.height() - 260),
        k.color(200,200,200),
        k.anchor("botleft")
    ]);

    const text = k.add([
        k.text(`
Welcome to XFS 350.

This display mode for the ECAM display does not exist in the real aircraft - this is designed to assist you with the simulator using guides and various controls.

Text highlighted as blue performs an action when clicked.
            `, {
            font: "consolas",
            size: 12,
            width: 210
        }),
        k.pos(x + 10, k.height() - 260),
        k.color(255,255,255),
        k.anchor("topleft")
    ]);
};