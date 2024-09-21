const winLose = () => {
    scene("Start", () => {
        add([
            text("Welcome to My Game!", { size: 10 }),
            pos(center().x, center().y - 80),
            origin("center"),
        ])
        add([
            text("Controls", { size: 8 }),
            pos(center().x, center().y - 55),
            origin("center"),
        ])
        add([
            text("(Arrow) to move", { size: 8 }),
            pos(center().x, center().y - 45),
            origin("center"),
        ])
        add([
            text("(space) Attack", { size: 8 }),
            pos(center().x, center().y - 35),
            origin("center"),
        ])
        add([
            text("Press (s) Key to Start Game", { size: 10 }),
            pos(center().x, center().y),
            origin("center"),
        ])
        // Start the game on Space press
        keyPress("s", () => {
            go("game"); // Transition to the main game scene
        });
    })
}

module.exports = { winLose }