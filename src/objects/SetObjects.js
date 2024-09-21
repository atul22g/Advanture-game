// objects
export const objects = {
    width: 16,
    height: 16,
    // Chest
    "$": () => [
        sprite("chest"),
        area(),
        solid(),
        { opened: false, },
        "chest",
    ],
    // Enemy
    "E": () => [
        sprite("ogre"),
        area(),
        solid(),
    ],
    // Wall
    "┗": () => [
        sprite("wall_botleft"),
        area({ width: 4 }),
        solid(),
    ],
    "┙": () => [
        sprite("wall_botright"),
        area({ width: 4, offset: vec2(12, 0) }),
        solid(),
    ],
    "┍": () => [
        sprite("wall_topleft"),
        area(),
        solid(),
    ],
    "┑": () => [
        sprite("wall_topright"),
        area(),
        solid(),
    ],
    "=": () => [
        sprite("wall"),
        area(),
        solid(),
    ],
    "-": () => [
        sprite("wall_top"),
        area({ height: 4, offset: vec2(0, 12) }),
        solid(),
    ],
    "!": () => [
        sprite("wall_left"),
        area({ width: 4, }),
        solid(),
    ],
    "|": () => [
        sprite("wall_right"),
        area({ width: 4, offset: vec2(12, 0) }),
        solid(),
    ],
}
