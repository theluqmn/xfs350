import { InstrumentFrame } from "./frames";
import { ButtonText } from "../components/buttons";

export default function EcamControls(k, x) {
    let mode = "general";
    let page = "home";
    let data = {
        general: {
            home: {
                title: "GENERAL - HOME",
                text: "Welcome to XFS 350. Please note this is still a work in progress!\n\nThis display mode for the ECAM display does not exist in the real aircraft - this is designed to assist you with the simulator using guides and various controls.\n\nText highlighted as blue performs an action when clicked.",
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

    const homeButton = ButtonText(k, "Home", "right", x + 10, k.height() - 15, () => { console.log("home") });
    const menuButton = ButtonText(k, "Menu", "right", x + 50, k.height() - 15, () => { console.log("menu") }); 
    const settingsButton = ButtonText(k, "Settings", "right", x + 90, k.height() - 15, () => { console.log("settings") });
    const aboutButton = ButtonText(k, "About", "right", x + 155, k.height() - 15, () => { console.log("about") });

    k.onUpdate(() => {
        title.text = data[mode][page].title;
        text.text = data[mode][page].text;
    });
};