const { winLose } = require("../screenText/winLoseStart")
import { load } from "../objects/load"
const { game } = require("./game")

const addBg = () => {

    load()
    game()
    winLose()
    go("Start")

}

module.exports = { addBg }