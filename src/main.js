import kaboom from "kaboom"
import { load } from "./load"
import { spin } from "./Allfunc"

kaboom({
	scale: 4,
	background: [40, 40, 40],
})

load()

// floor
addLevel([
	"xxxxxxxxxx",
	"          ",
	"          ",
	"          ",
	"          ",
	"          ",
	"          ",
	"          ",
	"          ",
	"          ",
], {
	width: 16,
	height: 16,
	" ": () => [
		sprite("floor", { frame: ~~rand(0, 8) }),
	],
})

// objects
const map = addLevel([
	"----------",
	"┍wwwwwwww┑",
	"l    E   r",
	"l        r",
	"l        r",
	"l      $ r",
	"l        r",
	"l $      r",
	"┗--------┙",
	"wwwwwwwwww",
], {
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
	// 
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
	"w": () => [
		sprite("wall"),
		area(),
		solid(),
	],
	"-": () => [
		sprite("wall_top"),
		area({ height: 4, offset: vec2(0, 12) }),
		solid(),
	],
	"l": () => [
		sprite("wall_left"),
		area({ width: 4, }),
		solid(),
	],
	"r": () => [
		sprite("wall_right"),
		area({ width: 4, offset: vec2(12, 0) }),
		solid(),
	],
})

const player = add([
	pos(map.getPos(2, 2)),
	sprite("hero", { anim: "idle" }),
	area({ width: 12, height: 12, offset: vec2(0, 6) }),
	solid(),
	origin("center"),
])

const sword = add([
	pos(),
	sprite("sword"),
	origin("bot"),
	rotate(0),
	follow(player, vec2(-4, 9)),
	spin(),
])

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
		sword.spin()
	}
})

const SPEED = 120

// const dirs = {
// 	"left": LEFT,
// 	"right": RIGHT,
// 	"up": UP,
// 	"down": DOWN,
// }

player.onUpdate(() => {
	camPos(player.pos)
})

onKeyDown("right", () => {
	player.flipX(false)
	sword.flipX(false)
	player.move(SPEED, 0)
	sword.follow.offset = vec2(-4, 9)
})

onKeyDown("left", () => {
	player.flipX(true)
	sword.flipX(true)
	player.move(-SPEED, 0)
	sword.follow.offset = vec2(4, 9)
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
