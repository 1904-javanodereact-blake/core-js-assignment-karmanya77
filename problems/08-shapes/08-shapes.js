/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  if (height % 2 == 0) {
    console.log('Enter an odd Number.');
  }
  else {
    switch (shape) {
      case 'Square':
        for (let i = 0; i < height; i++) {
          let s = '';
          for (let j = 0; j < height; j++) {
            s += character + ' ';
          }
          console.log(s);
        }
        break;

      case 'Triangle':
        for (let i = 0; i < height; i++) {
          let s = '';
          for (let j = 0; j < i; j++) {
            s += character;
          }
          console.log(s);
        }
        break;

      case 'Diamond':
        char = character;
        let s = '';
        let counter = 0;
        let n = Math.floor(height / 2);
        console.log(n);
        for (let i = 1; i < height; i += 2) {
          s = '';
          for (let j = 0; j < n; j++) {
            s = s + ' ';
          }
          n--;
          for (let j = 0; j < i; j++) {
            s = s + char;
          }
          console.log(s);

        }
        for (let i = height; i > 0; i -= 2) {
          s = '';
          for (let j = 0; j < counter; j++) {
            s = s + ' ';
          }
          counter++;

          for (let j = 0; j < i; j++) {
            s = s + char;
          }
          console.log(s);

        }
        break;
    }
  }

}

printShape('Square', 7, '-');
printShape('Triangle', 5, '=');
printShape('Diamond', 9, '#');