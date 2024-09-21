const load = () => {
	// https://0x72.itch.io/dungeontileset-ii
	loadSpriteAtlas("sprites/dungeon.png", {
		// water
		"water": {
			"x": 65,
			"y": 45,
			"width": 15,
			"height": 33
		},
		// tower
		"tower": {
			"x": 95,
			"y": 80.1,
			"width": 18,
			"height": 40
		},
		// Door
		"door": {
			"x": 15,
			"y": 224,
			"width": 60,
			"height": 33
		},
		// Chests
		"chest": {
			"x": 304,
			"y": 304,
			"width": 48,
			"height": 16,
			"sliceX": 3,
			"anims": {
				"open": {
					"from": 0,
					"to": 2,
					"speed": 20,
					"loop": false
				},
				"close": {
					"from": 2,
					"to": 0,
					"speed": 20,
					"loop": false
				}
			}
		},
		// Players and enemies
		"hero": {
			"x": 128,
			"y": 100,
			"width": 144,
			"height": 28,
			"sliceX": 9,
			"anims": {
				"idle": {
					"from": 0,
					"to": 0,
					"speed": 2,
					"loop": true
				},
				"run": {
					"from": 4,
					"to": 7,
					"speed": 10,
					"loop": true
				},
				"hit": 8
			}
		},
		// Weapons
		"sword0": {
			"x": 310,
			"y": 24,
			"width": 12,
			"height": 24
		},
		"sword1": {
			"x": 322,
			"y": 24,
			"width": 12,
			"height": 24
		},
		// Floor
		"floor": {
			"x": 16,
			"y": 64,
			"width": 48,
			"height": 48,
			"sliceX": 3,
			"sliceY": 3
		},
		// Walls
		"wall": {
			"x": 16,
			"y": 16,
			"width": 16,
			"height": 16
		},
		"wall_top": {
			"x": 16,
			"y": 0,
			"width": 16,
			"height": 16
		},
		"wall_left": {
			"x": 16,
			"y": 128,
			"width": 16,
			"height": 16
		},
		"wall_right": {
			"x": 0,
			"y": 128,
			"width": 16,
			"height": 16
		},
		"wall_topleft": {
			"x": 32,
			"y": 128,
			"width": 16,
			"height": 16
		},
		"wall_topright": {
			"x": 48,
			"y": 128,
			"width": 16,
			"height": 16
		},
		"wall_botleft": {
			"x": 32,
			"y": 144,
			"width": 16,
			"height": 16
		},
		"wall_botright": {
			"x": 48,
			"y": 144,
			"width": 16,
			"height": 16
		}
	})
}



// "ogre": {
// 	"x": 16,
// 	"y": 320,
// 	"width": 256,
// 	"height": 32,
// 	"sliceX": 8,
// 	"anims": {
// 		"idle": {
// 			"from": 0,
// 			"to": 3,
// 			"speed": 3,
// 			"loop": true
// 		},
// 		"run": {
// 			"from": 4,
// 			"to": 7,
// 			"speed": 10,
// 			"loop": true
// 		}
// 	}
// },

module.exports = { load }