/**
 * Main window
 * GUI definition
 */

import { button, Colour, window } from "openrct2-flexui";
import { pluginName } from "./environment";
import { onButtonClick } from "./mainActions";

export const mainWindow = window({
    title: pluginName,
    width: 200,
    height: 40,
    colours: [Colour["Grey"], Colour["Grey"]],
    content: [
        button({
            text: "Run code and cause game to crash",
            onClick: () => onButtonClick(),
        }),
    ]
})