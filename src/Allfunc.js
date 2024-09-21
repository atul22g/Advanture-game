// sword1 roll function
function spin() {
	let spinning = false
	return {
		id: "spin",
		update() {
			if (spinning) {
				this.angle += 2200 * dt()
				if (this.angle >= 360) {
					this.angle = 0
					// spinning = false
				}
			}
		},
		spin() {
			spinning = true
		},
		stop() {
			this.angle = 0
			spinning = false
		},
	}
}

module.exports = {spin}