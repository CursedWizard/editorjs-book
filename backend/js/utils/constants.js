"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmptyLesson = void 0;
function getEmptyLesson(title) {
    return JSON.stringify({
        blocks: [
            {
                type: "header",
                data: {
                    text: title,
                    level: 2
                }
            },
        ],
        version: "2.12.4"
    });
}
exports.getEmptyLesson = getEmptyLesson;
