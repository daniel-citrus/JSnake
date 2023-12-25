function Arena(height = 10, border = 'infinity') {
    this.height = height;
    this.width = height;
    this.border = border;
    this.cells = new Array();

    for (let row = 0; row < height; row++) {
        const arenaRow = [];

        for (let column = 0; column < height; column++) {
            arenaRow.push(['']);
        }

        this.cells.push(arenaRow);
    }
}

Arena.prototype.getArena = function () {
    return this.cells;
};

/**
 *
 * @param {*} x coordinate
 * @param {*} y coordinate
 * @param {*} value
 * @returns
 */
Arena.prototype.updateCell = function (x, y, value) {
    if (x >= this.height || y >= this.height) {
        console.error(new Error('x or y value does not exist in the arena'));
        return;
    }

    this.cells[x][y] = value;
};

export default Arena;
