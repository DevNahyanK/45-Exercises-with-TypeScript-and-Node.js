
function make_shirt(size: string = "Large", message: string = "I love Typescript"): void{

    console.log(`Creating a ${size} shirt with the message: "${message}"`);

}
// Large
make_shirt();

// Medium
make_shirt("Medium");

// Small
make_shirt("Small", "I love Facebook Marketing");