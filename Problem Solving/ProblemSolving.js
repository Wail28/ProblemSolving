let Q1 = document.getElementById("Q1");
let Q2 = document.getElementById("Q2");
let Q3 = document.getElementById("Q3");
let Q4 = document.getElementById("Q4");
let Q5 = document.getElementById("Q5");
let Q6 = document.getElementById("Q6");
let Q7 = document.getElementById("Q7");
let Q8 = document.getElementById("Q8");
let Q9 = document.getElementById("Q9");
let Q10 = document.getElementById("Q10");


Q1.addEventListener("click",()=>{
// write a program that compares 3 numbers and get the largest number (user should enter 3 numbers)
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let number3 = parseFloat(prompt("Enter the third number:"));

let largestNumber;

if (number1 >= number2 && number1 >= number3) {
    largestNumber = number1;
} else if (number2 >= number1 && number2 >= number3) {
    largestNumber = number2;
} else {
    largestNumber = number3;
}

console.log("The largest number is: " + largestNumber);
})


Q2.addEventListener("click",()=>{
    // a string is considered valid if all characters of the string appear the same number of times, write a function that returns true if valid false if not, you can remove 1 character from the string

function isValidString(s) {
    const freqMap = new Map();
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const countFreqMap = new Map();
    for (const count of freqMap.values()) {
        countFreqMap.set(count, (countFreqMap.get(count) || 0) + 1);
    }

    if (countFreqMap.size === 1) {
        return true;
    } else if (countFreqMap.size === 2) {
        const [[count1, freq1], [count2, freq2]] = countFreqMap;
        if ((freq1 === 1 && (count1 === 1 || Math.abs(count1 - count2) === 1)) ||
            (freq2 === 1 && (count2 === 1 || Math.abs(count1 - count2) === 1))) {
            return true;
        }
    }

    return false;
}
console.log(isValidString("wwsswwsswwss"));
console.log(isValidString("aadvfss"));
console.log(isValidString("opopop")); 
})

Q3.addEventListener("click",()=>{
    // user should enter array of numbers and you are giving the number, one of the two numbers that equals the sum of the given number

function findNumberPairs(array, targetSum) {
    const numberSet = new Set();
    const result = [];

    for (const num of array) {
        const complement = targetSum - num;
        if (numberSet.has(complement)) {
            result.push([num, complement]);
        }
        numberSet.add(num);
    }

    return result;
}

const numbers = [2,5,7,3,5,8,1,12];
const target = 12;
const pairs = findNumberPairs(numbers, target);

console.log("Pairs that sum to " + target + ":");
for (const pair of pairs) {
    console.log(pair);
}
})

Q4.addEventListener("click",()=>{
    // write a function that takes height and radius and returns size of the cone 

function coneVolume(height, radius) {
    if (height <= 0 || radius <= 0) {
        throw new Error("H and R must be positive values.");
    }

    const pi = Math.PI;
    const volume = (1/3) * pi * Math.pow(radius, 2) * height;
    return volume;
}

const height = 5;
const radius = 3;
const volume = Math.floor(coneVolume(height, radius));
console.log("Volume of the cone = ", volume);
})

Q5.addEventListener("click",()=>{
    // Mohammed wanted to find out if the person he talks to online was a male or a female by their username, using this method: characters in the username is odd then user is a male, otherwise it is female.

function determineGenderByUsername(username) {
    const usernameLength = username.length;
    if (usernameLength % 2 === 0) {
        return "female";
    } else {
        return "male";
    }
}

const username1 = "Ahmed";
const username2 = "Sara";

console.log(username1 + " is " + determineGenderByUsername(username1));
console.log(username2 + " is " + determineGenderByUsername(username2));
})

Q6.addEventListener("click",()=>{
    // given a list of X fractions, Represented as two lists numerator and denominator. The task is to determine the count of pairs of fractions whose sum equals to 1

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function countFractionsSummingToOne(numerators, denominators) {
    let n = numerators.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const num1 = numerators[i];
            const den1 = denominators[i];
            const num2 = numerators[j];
            const den2 = denominators[j];

            if (num1 * den2 + num2 * den1 === den1 * den2) {
                count++;
            }
        }
    }

    return count;
}

const numerators = [1, 2, 2, 8];
const denominators = [2, 4, 8, 9, 12];

const pairsCount = countFractionsSummingToOne(numerators, denominators);
console.log("Count of pairs summing to 1:", pairsCount);

})

Q7.addEventListener("click",()=>{
    // Chef and Chefina are playing with dice in one turn, both of them roll their dice at once, they consider a turn to be good if the sum of the numbers on their dice is greater than 6 given that in a particular turn Cheif and Chefina  got X and Y on their respective dice, find whether the turn was good

function isGoodTurn(chefRoll, chefinaRoll) {
    return chefRoll + chefinaRoll > 6;
}

const chefRoll = 4;
const chefinaRoll = 3;

if (isGoodTurn(chefRoll, chefinaRoll)) {
    console.log("The turn was good!");
} else {
    console.log("The turn was not good.");
}
})

Q8.addEventListener("click",()=>{
    // Given an array of a positive integers your task is to find the leader in the array, An element of array is leader if its greater than or equal to all the elements to its right side the right most element is always a leader.

function findLeaders(arr) {
    let n = arr.length;
    let leaders = [];
    let maxRight = arr[n - 1];
    leaders.push(maxRight);

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i];
            leaders.push(maxRight);
        }
    }

    return leaders.reverse();
}

const array = [43,62,33,4,24,12,7,8];
const leaderElements = findLeaders(array);
console.log("Leader elements:", leaderElements);
})

Q9.addEventListener("click",()=>{
    // Given a linked list and a number K, you need to reverse first part of linked list with k nodes and the second part with n-K nodes



class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

function reverseKNodes(head, k) {
    let count = 0;
    let current = head;

    while (current !== null && count < k - 1) {
        current = current.next;
        count++;
    }

    if (current === null) {
        return head;
    }

    const nextPart = current.next;
    current.next = null;

    const reversedPart = reverseLinkedList(head);
    head.next = reverseKNodes(nextPart, k);

    return reversedPart;
}

function reverseLinkedListKNodes(head, k) {
    if (!head || k <= 1) {
        return head;
    }

    const length = calculateLength(head);
    if (length < k) {
        return head;
    }

    return reverseKNodes(head, k);
}

function calculateLength(head) {
    let length = 0;
    let current = head;

    while (current !== null) {
        length++;
        current = current.next;
    }

    return length;
}

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

const k = 2;
const reversedList = reverseLinkedListKNodes(list, k);

let current = reversedList;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
})


Q10.addEventListener("click",()=>{
    // Given a string S, the task is to count the number of the substrings which contains equal number of lowercase and uppercase letters.

function findEqualLetterSubstrings(s) {
    const substrings = [];
    let lowerCount = 0;
    let upperCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            lowerCount++;
        } else {
            upperCount++;
        }

        if (lowerCount === upperCount) {
            substrings.push({
                substring: s.substring(i - lowerCount * 2 + 1, i + 1),
                letters: s.substring(i - lowerCount * 2 + 1, i + 1).split("")
            });
        }
    }

    return substrings;
}

const inputString = "WomensDAYS";
const substrings = findEqualLetterSubstrings(inputString);

console.log("Substrings with equal lowercase and uppercase letters:");
for (const { substring, letters } of substrings) {
    console.log("Substring:", substring);
    console.log("Letters:", letters.join(", "));
    console.log();
}
})





