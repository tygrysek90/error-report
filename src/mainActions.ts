/**
 * GUI functions
 */

import { Colour } from "openrct2-flexui" // enum Colour {Black = 0, Grey = 1, White = 2,...
import { debug, error } from "./logger"  // these are just fancy console.log() wrappers

export function onButtonClick() {
    let range = ui.imageManager.allocate(1)
    debug(JSON.stringify(range))
    if (range != null) {
        ui.imageManager.draw(range.start, {width: 50, height: 50} satisfies ScreenSize, (g:GraphicsContext) => {
            g.colour = Colour.Black   // 0
            g.line(0,0,49,49)
        })
    }
    else {
        error("can not get image alloc range")
    }
}