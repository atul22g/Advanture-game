import { spin } from "../Allfunc"
import { objects } from "../objects/SetObjects"
import { Level } from "./level"
const game = () => {

    scene("game", () => {
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

        const sword1 = add([
            pos(),
            sprite("sword1"),
            origin("bot"),
            rotate(0),
            follow(player, vec2(-4, 9)),
            spin(),
        ])


        // Controls
        onKeyPress("space", () => {
            let interacted = false
            every("chest", (c) => {
                if (player.isTouching(c)) {
                    if (c.opened) {
                        c.play("close")
                        c.opened = false
                    } else {
                        c.play("open")
                        c.opened = true
                    }
                    interacted = true
                }
            })
            if (!interacted) {
                sword1.spin()
            }
        })

        const SPEED = 120

        onKeyDown("right", () => {
            player.flipX(false)
            sword1.flipX(false)
            player.move(SPEED, 0)
            sword1.follow.offset = vec2(-4, 9)
        })

        onKeyDown("left", () => {
            player.flipX(true)
            sword1.flipX(true)
            player.move(-SPEED, 0)
            sword1.follow.offset = vec2(4, 9)
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