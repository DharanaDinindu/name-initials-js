import * as readline from "readline";
import { validateName, getNameWithInitials, printResult } from './index.js';

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(
        "Enter fullname: ",

        (fullName) => {
            try {
                validateName(fullName);
                const nameWithInit = getNameWithInitials(fullName);
                printResult(nameWithInit);
            } catch (error) {
                console.log(error.message);
            }
            rl.close();
        }
    );
}

main();
