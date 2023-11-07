const transport: string[] = ['bicycle','car','bus','train'];
const adjectives :string[] = ['fast','Ford','public','high-speed'];
let i : number = 0;
while (i < transport.length){
    const a = transport[i];
    const b = adjectives[i];
    console.log(`I like ${b} ${a} for travelling from one place to another.`);
    i++;

}