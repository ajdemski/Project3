#### _By Aaron Demski_

## Technologies Used

* _Html_
* _Css_
* _JavaScript_
* _TDD (Test-Driven-Development)_
* _VsCode_
* _GitHub_

## Description

_A Code Review Project from Aaron Demski, In this repository you'll find index.html, css/styles.css, js/scripts.js, and obviously the README.md. This repo is about Mr. Rogobers Neighborhood, input numbers and see what you get returned back to you! Hope you enjoy._

## Setup/Installation Requirements

* _Clone my repository to your desktop using VsCode._
* _In the terminal clone the repository with the command: git clone https://github.com/ajdemski/Project3.git_
* _Navigte to the top level of the directory._
* _Open index.html in the file you cloned._

## _Link To Site_

* _https://github.com_

## Known Bugs

* _No Known Bugs_

## License

_Copyright (c) <2023> <Aaron Demski>_

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _June 15th, 2023_ Aaron Demski

## Tests:
 Test 1: "An empty array called 'result' will store the robots messages for each number."
 Code:
>function generateRobogersAnswer(num) {
>  const result = [];
> }

Expected Output: none at the moment

Test 2: "It will count from 0 to the 'num' that the user inputed"
Code: 
>for (let i = 0; i <= num; i++) {
>  let message = "";
> }

Expected Output: ["num"]

Test 3: "It will check if the current number ('i') contains a 1"
Code:
>for (let i = 0; i <= num; i++) {
>  let message = "";
>  if (i.toString().includes("1")) {
>    message += "Won't you be my neighbor?";
>  }
>}

Expected Output: "0, Won't you be my neighbor?, 2, 3, 4, 5"

Test 4: "It will check if the current number ('i') contains a 2"
Code:
>if (i.toString().includes("2")) {
>  message += "boop";
>}

Expected Output: "0, 1, boop, 3, 4, 5"

Test 5: "It will check if the current number ('i') contains a 3"
Code:
>else if (i.toString().includes("3")) {
>  message += "beep";
>}

Expected Output: "0, 1, 2, beep, 4, 5"

Test 6: "It will add the constructed message to the result array"
Code:
>result.push(message);
>  return result;

Expected Output: "[0, Won't you be my neighbor?, boop, beep, 4, 5]"
