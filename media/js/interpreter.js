var Interpreter = function (source, tape, pointer, out) {
    /*
    * Brainfuck Interpreter Class
    * @source: Brainfuck script
    * @tape: Tape model
    * @pointer: Pointer model
    * @out: Output callback
    *
    * Usage:
    *
    *    var interpreter = new Interpreter(">", tape, pointer);
    *    interpreter.next()
    *    pointer.get("index") // 1
    *
    * */
    var tokens = source.replace(/[^<>+-.,\[\]]/g, ''),
        jumps = [],
        action = 0;

    this.next = function () {
        if (action > tokens.length) throw {
            "name": "End",
            "message": "End of brainfuck script."
        };
        var token = tokens[action];
        var cell = tape.models[pointer.get("index")];
        switch (token) {
            case "<":
                pointer.left();
                break;

            case ">":
                pointer.right();
                break;

            case "-":
                cell.dec();
                break;

            case "+":
                cell.inc();
                break;

            case ",":
                // not implemented
                break;

            case ".":
                out(cell);
                break;

            case "[":
                jumps.push(action);
                break;

            case "]":
                if (cell.get("value") > 0) {
                    action = jumps[jumps.length - 1];
                } else {
                    jumps.pop();
                }
        }
        action++;
    }
};
