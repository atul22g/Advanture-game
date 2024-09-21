import { spin } from "../Allfunc"
import { objects } from "../objects/SetObjects"
import { Level } from "./level"
const game = () => {

    scene("game", ({ isSword } = { isSword: 0 }) => {
        // floor
        addLevel([
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
            "                                    ",
        ], {
            width: 16,
            height: 16,
            " ": () => [
                sprite("floor", { frame: ~~rand(0, 8) }),
            ],
        })

        // Map
        const map = addLevel(Level, objects)


        // Player and sword1
        const player = add([
            pos(map.getPos(2, 2)),
            sprite("hero", { anim: "idle" }),
            area({ width: 12, height: 12, offset: vec2(0, 6) }),
            solid(),
            origin("center"),
        ])

        let sword;

        const swordComponents = [
            pos(),
            origin("bot"),
            rotate(0),
            follow(player, vec2(-4, 9)),
            spin(),
        ];

        const updateSword = () => {
            if (isSword == 1) {
                swordComponents.push(sprite("sword0"));
                console.log(isSword);
            }
            sword = add(swordComponents);
        }

        updateSword()

        // Controls
        // Chest and open/close
        onKeyPress("c", () => {
            let interacted = false
            every("chest", (c) => {
                    if (c.opened) {
                        c.play("close")
                        c.opened = false
                    } else {
                        c.play("open")
                        c.opened = true
                    }
                    isSword += 1
                    updateSword()
                    isSword = 1
                    interacted = true
            })
        })
        onKeyPress("space", () => {
            if (isSword > 0) {
                sword.spin()
            }
        })
        onKeyRelease("space", () => {
            if (isSword > 0) {
                sword.stop()
            }
        })

        const SPEED = 120

        // Person movement
        onKeyDown("right", () => {
            player.flipX(false)
            player.move(SPEED, 0)
            if (isSword > 0) {
                sword.flipX(false)
                sword.follow.offset = vec2(-4, 9)
            }
        })

        onKeyDown("left", () => {
            player.flipX(true)
            player.move(-SPEED, 0)
            if (isSword > 0) {
                sword.flipX(true)
                sword.follow.offset = vec2(4, 9)
            }
        })

        onKeyDown("up", () => {
            player.move(0, -SPEED)
        })

        onKeyDown("down", () => {
            player.move(0, SPEED)
        })

        onKeyPress(["left", "right", "up", "down"], () => {
            player.play("run")
        })

        onKeyRelease(["left", "right", "up", "down"], () => {
            if (
                !isKeyDown("left")
                && !isKeyDown("right")
                && !isKeyDown("up")
                && !isKeyDown("down")
            ) {
                player.play("idle")
            }
        })


        // Camera
        player.onUpdate(() => {
            camPos(player.pos)
        })
    })
}
module.exports = { game }