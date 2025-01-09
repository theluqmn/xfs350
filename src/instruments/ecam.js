import { InstrumentFrame } from "./frames";
import { ButtonText } from "../components/buttons";

let data = {
    mode: "general",
    page: "home",
    title: "",
    text: "",
    buttons: {
        1: "",
        2: "",
        3: "",
        4: "",
    }
}

function buttonsClear() {
   data.buttons = {
        1: "",
        2: "",
        3: "",
        4: "",
    }
}

export default function EcamControls(k, x) {
    InstrumentFrame(k, "ECAM/GENERAL PURPOSE DISPLAY", x, k.height() - 5, 230, 280);

    const display = k.add([
        k.rect(220,270),
        k.pos(x + 5, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);


    const title = k.add([
        k.text("", {
            font: "consolas",
            size: 14,
        }),
        k.pos(x + 10, k.height() - 260),
        k.color(200,200,200),
        k.anchor("botleft")
    ]);

    const text = k.add([
        k.text("", {
            font: "consolas",
            size: 12,
            width: 210
        }),
        k.pos(x + 10, k.height() - 260),
        k.color(255,255,255),
        k.anchor("topleft")
    ]);

    // Fixed buttons
    const homeButton = ButtonText(k, "HOME", "right", x + 10, k.height() - 15, () => { data.page = "home" });
    const menuButton = ButtonText(k, "MENU", "right", x + 50, k.height() - 15, () => { data.page = "menu" }); 

    // Dynamic buttons
    const button1 = ButtonText(k, data.buttons[1], "right", x + 10, k.height() - 35, () => { console.log("button 1") });
    const button2 = ButtonText(k, data.buttons[2], "right", x + 10, k.height() - 50, () => { console.log("button 2") });
    const button3 = ButtonText(k, data.buttons[3], "right", x + 10, k.height() - 65, () => { console.log("button 3") });
    const button4 = ButtonText(k, data.buttons[4], "right", x + 10, k.height() - 80, () => { console.log("button 4") });

    k.onUpdate(() => {
        title.text = data.title;
        text.text = data.text;

        button1.text = data.buttons[1];
        button2.text = data.buttons[2];
        button3.text = data.buttons[3];
        button4.text = data.buttons[4];

        if (data.mode == "general") {
            GeneralMode(k);
        }
    });
};

function GeneralMode(k) {
    switch (data.page) {
        case "home":
            data.title = "HOME",
            data.text = `
Welcome to XFS 350. Please note this is still a work in progress!

This display mode for the ECAM display does not exist in the real aircraft - this is designed to assist you with the simulator using guides and various controls.

Text highlighted as blue performs an action when clicked. Start by clicking the "MENU" button below.`
            buttonsClear();
            break;
        
        case "menu":
            data.title = "MENU",
            data.text = `
"GUIDES" opens a list of guides that you can follow to complete a task - such as setup, takeoff, etc.

"SKIP" lets the simulator to automatically perform a specified task for you.

"EXPLAIN" provides a description of a specific system or instrument.
            `,
            buttonsClear();
            data.buttons = {
                1: "GUIDES",
                2: "SKIP",
                3: "EXPLAIN",
                4: ""
            }
            break;

        case "guides":
            data.title = "GUIDES",
            data.text = "Lots of guides."
            buttonsClear();
            data.buttons = {
                1: "SETUP",
                2: "TAKE-OFF",
                3: "AUTOPILOT",
                4: "LANDING"
            }
            break;
    };
};