import { InstrumentFrame } from "./frames";
import { simData } from "../functions/simEngine";

export default function InsPFD(k, x) {
    InstrumentFrame(k, "PRIMARY FLIGHT DISPLAYS", x, k.height() - 5, 460, 280);

    pfd1(k, x);

    k.add([
        k.rect(4, 270),
        k.pos(x + 230, k.height() - 10),
        k.color(20,20,20),
        k.anchor("bot")
    ])

    pfd2(k, x);
};

function pfd1(k, x) {
    const display = k.add([
        k.rect(220,270),
        k.pos(x + 5, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);

    
    const speed = k.add([
        k.rect(40,160),
        k.pos(x + 10, k.height() - 70),
        k.color(105,108,146),
        k.anchor("botleft")
    ]);
    
    const mach = k.add([
        k.text("0.00", {
            font: "consolas",
            size: 10
        }),
        k.pos(x + 10, k.height() - 55),
        k.color(0,255,0),
        k.anchor("botleft")
    ]);
    
    const alt = k.add([
        k.rect(40,160),
        k.pos(x + 180, k.height() - 70),
        k.color(105,108,146),
        k.anchor("botleft")
    ]);
    
    const autothrottle = k.add([
        k.text("A/THR", {
            font: "consolas",
            size: 12
        }),
        k.pos(x + 180, k.height() - 250),
        k.color(255,255,255),
    ]);
    
    const pitch = k.add([
        k.text("PITCH:    0 deg", {
            font: "consolas",
            size: 12
        }),
        k.pos(x + 55, k.height() - 35),
        k.color(200,200,200),
        k.anchor("botleft")
    ]);
    
    const elevator = k.add([
        k.text("ELEVATOR: 0 deg", {
            font: "consolas",
            size: 12
        }),
        k.pos(x + 55, k.height() - 15),
        k.color(200,200,200),
        k.anchor("botleft")
    ]);
    
    k.onUpdate(() => {
        pitch.text = "PITCH:    " + (simData.plane.pitch.toFixed(1)) + " deg";
        elevator.text = "ELEVATOR: " + (simData.plane.elevators).toFixed(1) + " deg";
        mach.text = ((simData.plane.speed * 1.15078) / 761.2).toFixed(2);
    });

    pitchIndicator(k, x);
    speedIndicator(k, x);
    altitudeIndicator(k, x);
};

function pfd2(k, x) {
    const display = k.add([
        k.rect(220,270),
        k.pos(x + 235, k.height() - 10),
        k.color(0,0,0),
        k.anchor("botleft")
    ]);

    const throttleIndicator = k.add([
        k.text("THROTTLE:   0/100", {
            font: "consolas",
            size: 12
        }),
        k.pos(x + 240, k.height() - 260),
        k.color(200,200,200),
        k.anchor("botleft")
    ]);
    
    const brakeIndicator = k.add([
        k.text("BRAKES:     0/100", {
            font: "consolas",
            size: 12
        }),
        k.pos(x + 240, k.height() - 220),
        k.color(200,200,200),
        k.anchor("botleft")
    ]);

    const flapsIndicator = k.add([
        k.text("FLAPS:      0/40", {
            font: "consolas",
            size: 12
        }),
        k.pos(x + 240, k.height() - 240),
        k.color(200,200,200),
        k.anchor("botleft")
    ]);

    k.onUpdate(() => {
        throttleIndicator.text = `THROTTLE:   ${simData.inputs.throttle}/100`;
        flapsIndicator.text = `FLAPS:      ${simData.inputs.flaps}/40`;
        brakeIndicator.text = `BRAKES:      ${simData.inputs.brakes}/100`;
    })
};

function pitchIndicator(k, x) {
    const air = k.add([
        k.rect(120,80),
        k.pos(x + 55, k.height() - 230),
        k.color(2,103,238),
        k.anchor("topleft")
    ]);

    const ground = k.add([
        k.rect(120,80),
        k.pos(x + 55, k.height() - 70),
        k.color(151,71,16),
        k.anchor("botleft")
    ]);

    const level = k.add([
        k.rect(120,1),
        k.pos(x + 55, k.height() - 150),
        k.color(255,255,255),
        k.anchor("botleft")
    ]);

    const needleL = k.add([
        k.rect(30,5),
        k.pos(x + 60, k.height() - 148),
        k.color(0,0,0),
        k.outline(1, k.rgb(247,220,111)),
        k.anchor("botleft")
    ]);

    const needleR = k.add([
        k.rect(30,5),
        k.pos(x + 140, k.height() - 148),
        k.color(0,0,0),
        k.outline(1, k.rgb(247,220,111)),
        k.anchor("botleft")
    ]);

    k.onUpdate(() => {
        ground.height = 80 - (simData.plane.pitch * 5);
        air.height = 80 + (simData.plane.pitch * 5);
        level.pos.y = k.height() - 150 + (simData.plane.pitch * 5);
    })
}

function speedIndicator(k, x) {
    const frame = k.add([
        k.rect(40,20),
        k.pos(x + 11, k.height() - 140),
        k.color(0,0,0),
        k.outline(1, k.rgb(247,220,111)),
        k.anchor("botleft")
    ]);

    const value = k.add([
        k.text("000", {
            font: "consolas",
            size: 12
        }),
        k.pos(x + 12, k.height() - 142),
        k.color(255,255,255),
        k.anchor("botleft")
    ]);

    k.onUpdate(() => {
        value.text = simData.plane.speed.toFixed(0);
    });
}

function altitudeIndicator(k, x) {
    const frame = k.add([
        k.rect(40,20),
        k.pos(x + 180, k.height() - 140),
        k.color(0,0,0),
        k.outline(1, k.rgb(247,220,111)),
        k.anchor("botleft")
    ]);

    const value = k.add([
        k.text("45200", {
            font: "consolas",
            size: 12
        }),
        k.pos(x + 218, k.height() - 142),
        k.color(255,255,255),
        k.anchor("botright")
    ]);

    k.onUpdate(() => {
        value.text = simData.plane.altitude.toFixed(0);
    });
}
