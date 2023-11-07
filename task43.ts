function make_greatt(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

function show_magiciansS(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magician_namesS: string[] = ["David Copperfield", "Jadugar 420", "Jadugar 007", "Samri jadugar"];

const great_magiciansS = make_greatt([...magician_namesS]); // Create a copy of the array

console.log("Original Magicians:");
show_magiciansS(magician_namesS);

console.log("\nGreat Magicians (Separate Array):");
show_magiciansS(great_magiciansS);
