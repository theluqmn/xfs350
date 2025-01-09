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
    let pitch = simData.plane.pitch;

    // throttle
    k.onKeyPressRepeat(["w", "W"], () => { if (simData.inputs.throttle < 100) { simData.inputs.throttle += 2 } });
    k.onKeyPressRepeat(["s", "S"], () => { if (simData.inputs.throttle > 0) { simData.inputs.throttle -= 2 } });

    // flaps
    k.onKeyPressRepeat(["q", "Q"], () => { if (simData.inputs.flaps < 40) { simData.inputs.flaps += 1 } });
    k.onKeyPressRepeat(["a", "A"], () => { if (simData.inputs.flaps > 0) { simData.inputs.flaps -= 1 } });

    // elevators
    let elevatorUp = k.onKeyPressRepeat("left", () => { if (simData.plane.elevators < 40) { simData.plane.elevators += 2 } });
    k.onKeyPressRepeat("right", () => { if (simData.plane.elevators > -40) { simData.plane.elevators -= 2 } });

    k.onUpdate(() => {
        if (simData.plane.elevators > 40) { simData.plane.elevators = 40 }
        if (simData.plane.elevators < -40) { simData.plane.elevators = -40 }

        if (!elevatorUp) {
            simData.plane.elevators = 0;
        }

        simData.plane.pitch += simData.plane.elevators / 100;
    })
};