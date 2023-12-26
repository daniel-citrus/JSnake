/**
 * @param {*} x starting x coordinate
 * @param {*} y starting y coordinate
 * @param {*} speed
 */
function Snake(x = 0, y = 0) {
    this.direction = 'right';
    this.length = 1;
    this.status = 'alive';
    this.body = [
        {
            type: 'head',
            cell: [x, y],
        },
    ];
}

Snake.prototype.die = function () {
    this.direction = 'right';
    this.length = 1;
    this.body = this.body[0];
    this.status = 'dead';
};

Snake.prototype.moveForward = function () {
    let headCoordinates = this.headCell();
    const tail = this.body.pop();

    switch (this.direction) {
        case 'left':
            headCoordinates[0] -= 1;
            break;
        case 'right':
            headCoordinates[0] += 1;
            break;
        case 'up':
            headCoordinates[1] += 1;
            break;
        case 'down':
            headCoordinates[1] -= 1;
            break;
        default:
            console.error(new Error('Invalid direction'));
            this.body.push(tail);
            return;
    }

    tail.cell = headCoordinates;
    tail.type = 'head';
    this.body.unshift(tail);

    if (this.length === 1) {
        return;
    }

    if (this.length <= 2) {
        this.body[this.length - 1].type = 'tail';
        return;
    }

    this.body[1].type = 'body';
};

Snake.prototype.moveHead = function (x, y) {
    this.body[0].cell = [x, y];
};

Snake.prototype.grow = function () {
    if (this.length > 1) {
        this.body[this.length - 1].type = 'body';
    }

    this.body.push({
        type: 'tail',
        cell: this.tailCell(),
    });

    this.length += 1;
};

Snake.prototype.headCell = function () {
    const coords = this.body[0].cell;
    return [coords[0], coords[1]];
};

Snake.prototype.tailCell = function () {
    return this.body[this.length - 1].cell;
};

Snake.prototype.display = function () {
    this.body.forEach((part) => {
        console.log(`${part.type}: ${part.cell}`);
    });
};

Snake.prototype.changeDirection = function (direction) {
    const currentDirection = this.direction;

    if (currentDirection === direction) {
        return;
    }

    if (currentDirection === 'left' && direction === 'right') {
        return;
    }

    if (currentDirection === 'right' && direction === 'left') {
        return;
    }

    if (currentDirection === 'up' && direction === 'down') {
        return;
    }

    if (currentDirection === 'down' && direction === 'up') {
        return;
    }

    this.direction = direction;
};
