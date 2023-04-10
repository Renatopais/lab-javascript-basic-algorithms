// Iteration 1: Names and Input
const hacker1 = "Marisa";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Renato";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
const driver = hacker1.length;
const navigator = hacker2.length;

if (navigator < driver) {
    console.log(`The driver has the longest name, it has ${driver} characters.`);
}
else if (driver < navigator) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${driver} characters!`)
}

// Iteration 3: Loops
let nameWithSpace = ""

for (let i = 0; i < hacker1.length; i++) {
    nameWithSpace += hacker1[i].toUpperCase() + " ";
};

console.log(nameWithSpace);

let nameReversed = "";
for (let i = hacker1.length -1; i >= 0; i--) {
    nameReversed += hacker1[i];
}
console.log(nameReversed);

let order = hacker1.localeCompare(hacker2);

if (order === -1) {
    console.log("The driver's name goes first.");
}
else if (order === 1) {
    console.log("Yo, the navigator goes first definitely.");
}
else  {
    console.log("What?! You both have the same name?");
}

//#### Bonus 1:
let spaceCount = 0;
let wordEtCounter = 0;
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam eros, facilisis eget purus ut, lobortis accumsan est. Donec faucibus lectus sit amet libero fringilla mollis. Phasellus nisl dolor, iaculis luctus quam et, lacinia pretium velit. Nullam pharetra tristique quam, scelerisque volutpat tellus euismod eget. Integer porttitor bibendum ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sollicitudin malesuada lorem, sit amet tincidunt felis pharetra non. Pellentesque pretium nisl eget odio cursus ullamcorper. Suspendisse at nunc at velit ultricies tempor tempor non ipsum. Suspendisse molestie mi sed ullamcorper aliquet. Maecenas lobortis mauris in est maximus lacinia. Integer congue turpis id sapien blandit, a elementum magna commodo. Nam sagittis luctus ullamcorper. In sem lacus, viverra vel eros sed, lacinia tempus lectus. Sed nec elementum mauris. Quisque id posuere purus.Nullam sollicitudin ex et augue condimentum, sit amet imperdiet est mattis. Aenean facilisis dui a quam placerat lacinia. Vivamus quis magna et nunc interdum varius et porta odio. Mauris eu fermentum lectus, a sagittis dolor. Integer vestibulum bibendum augue. Proin varius, elit eu sollicitudin gravida, massa ante bibendum quam, nec congue leo nisi vitae erat. Sed sed volutpat nulla, at accumsan justo. Suspendisse ut tincidunt ante, eget porttitor nunc. Phasellus blandit tincidunt dui, sed mollis ipsum imperdiet non. Aenean vel ante feugiat, tempor justo sit amet, mattis nulla. Morbi luctus non neque in tempor.Etiam iaculis varius arcu sed hendrerit. Vestibulum quis turpis tempus, condimentum diam vel, feugiat orci. Sed sed quam felis. Nulla vitae arcu dui. In egestas eu tortor vel mattis. Vestibulum blandit rhoncus magna. Duis sagittis lacinia ipsum, a elementum purus facilisis at. Duis euismod venenatis ipsum, eget egestas purus. Sed id mollis sem. Maecenas porta orci purus, ut pharetra lectus vehicula vitae. Sed posuere lacus in fermentum aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras porttitor nisi ac magna volutpat, vitae pellentesque risus blandit.";

for (let i= 0; i < longText.length; i++) {
    const char = longText[i];
    if (char === " ") {
        spaceCount ++
    }
}   

for (let i= 0; i < longText.length; i++) {
    const char = longText[i]+longText[i+1];   
    if (char === "et") {
        wordEtCounter ++
    }
};
console.log(`The string contains ${spaceCount + 1} spaces and ${wordEtCounter} "et" words.`);

