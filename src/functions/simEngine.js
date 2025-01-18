export const simData = {
    x: 0,
    y: 0,
    inputs: {
        throttle: 0,
        brakes: 0,
        flaps: 0,
        gear : 0,
    },
    plane: {
        speed: 0,
        pitch: 0,
        elevators: 0,
        altitude: 0,
        engines: {
            1: { state: 0, fire: 0 },
            2: { state: 0, fire: 0 }
        }
    }
};

export function SimEngine(k) {
    // throttle
    k.onKeyPressRepeat(["w", "W"], () => { if (simData.inputs.throttle < 100) { simData.inputs.throttle += 2 } });
    k.onKeyPressRepeat(["s", "S"], () => { if (simData.inputs.throttle > 0) { simData.inputs.throttle -= 2 } });

    // brakes
    k.onKeyPressRepeat(["e", "E"], () => { if (simData.inputs.brakes < 100) { simData.inputs.brakes += 2 } });
    k.onKeyPressRepeat(["d", "D"], () => { if (simData.inputs.brakes > 0) { simData.inputs.brakes -= 2 } });

    // flaps
    k.onKeyPressRepeat(["q", "Q"], () => { if (simData.inputs.flaps < 40) { simData.inputs.flaps += 1 } });
    k.onKeyPressRepeat(["a", "A"], () => { if (simData.inputs.flaps > 0) { simData.inputs.flaps -= 1 } });

    // elevators
    k.onKeyPressRepeat("left", () => { if (simData.plane.elevators < 40) { simData.plane.elevators += 1 } });
    k.onKeyPressRepeat("up", () => { if (simData.plane.elevators < 40) { simData.plane.elevators += 0.5 } })
    k.onKeyPressRepeat("right", () => { if (simData.plane.elevators > -40) { simData.plane.elevators -= 1 } });
    k.onKeyPressRepeat("down", () => { if (simData.plane.elevators > -40) { simData.plane.elevators -= 0.5 } })

    k.onKeyPress("=", () => {
        simData.plane.elevators = 0;
        simData.plane.pitch = 0;
    })

    k.onUpdate(() => {
        simData.plane.speed += simData.inputs.throttle / 1500;
        simData.plane.pitch += simData.plane.elevators / 500;
        simData.plane.altitude += simData.plane.pitch * simData.plane.speed / 1200;
    })
};