console.log("Hellow world!")
console.log("commit verified")
console.log("second commit is verifed now on profile")
console.log("made changes on the UI")
console.log("MADE CHANGES TO THE BACKEND")
console.log("BOTH BACKEND AND UI WORKING VERIFIED")


const original = "Hello World";
const reversed: string = original.split("").reverse().join("");

console.log(reversed); // Output: "dlroW olleH"


//next code
type Operator = '+' | '-' | '*' | '/' | null;

class Calculator {
    private currentInput: string = '0';
    private previousInput: string = '0';
    private activeOperator: Operator = null;

    /**
     * Appends a digit or decimal point to the current input.
     */
    public appendNumber(char: string): void {
        if (char === '.' && this.currentInput.includes('.')) return;
        
        if (this.currentInput === '0' && char !== '.') {
            this.currentInput = char;
        } else {
            this.currentInput += char;
        }
    }

    /**
     * Sets the math operator and stores the current value.
     */
    public setOperator(op: Operator): void {
        if (this.activeOperator !== null) {
            this.calculate();
        }
        this.activeOperator = op;
        this.previousInput = this.currentInput;
        this.currentInput = '0';
    }

    /**
     * Executes the calculation based on the stored operator.
     */
    public calculate(): void {
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        let result: number;
        switch (this.activeOperator) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case '*': result = prev * current; break;
            case '/': 
                result = current === 0 ? 0 : prev / current; 
                break;
            default: return;
        }

        this.currentInput = result.toString();
        this.activeOperator = null;
        this.previousInput = '0';
    }

    public clear(): void {
        this.currentInput = '0';
        this.previousInput = '0';
        this.activeOperator = null;
    }

    public getDisplay(): string {
        return this.currentInput;
    }
}

// Example Usage:
const myCalc = new Calculator();
myCalc.appendNumber('1');
myCalc.appendNumber('0');
myCalc.setOperator('+');
myCalc.appendNumber('5');
myCalc.calculate();

console.log(`Result: ${myCalc.getDisplay()}`); // Output: Result: 15



function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseString("TypeScript")); // "tpircSepyT"

