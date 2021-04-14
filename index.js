class MaxOccurringChar {

// Use hash map to determine number of each type of character in string
// key will be character and value will be number of time character occurs in string

    maximumOccurringCharacter(string) {
    
    let maxChar = "";
    let max = 0;

    let hashMap = {};

    for(let i = 0; i < string.length; i++) {
        if (hashMap[string[i]] !== undefined) {
          hashMap[string[i]]++;
        } else {
            hashMap[string[i]] = 1;
        }
    }

    // Object.entries(hashMap).forEach(([key,value]) => console.log(`${key}: ${value}`));

    // Find the key that occurs the most times in the string
    // If keys occur the same number of times, find the first key

    Object.entries(hashMap).forEach(([key,value]) => {
        if (value > max) {
            max = value;
            maxChar = key;
        }
    });
    console.log(maxChar);
    return maxChar;
  }
}

let write = new MaxOccurringChar();
write.maximumOccurringCharacter("abbbaacc");

