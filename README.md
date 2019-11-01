# Week 3 Project (Beep Boop)

#### Application takes user input and returns translated version. Nov. 1, 2019

#### By **Saul Ordonez**

## Description

This webpage application will take in user input in the form of positive whole integers and, depending on the number entered, will produce a result list of numbers starting from zero to the input number and replacing all numbers with '3' with a specified phrase, '2' with a different specified phrase, and '1' with a further different specified phrase. The rules for which exception takes place is a hierarchy from the rule for '3' down to the rule for '1'.

## Specs

Behavior | Input | Output
--- | --- | ---
 **Numbers that contain a 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that"** | User input: "3" | Output: "I'm sorry, Dave. I'm afraid I can't do that"
 **Numbers that contain a 2 are replaced with "Boop!"** | User Input: "2" | Output: "Boop!"
 **Numbers that contain a 1 are replaced with** | Input: "1"  Output: "Beep!"
 **Numbers that contain neither 3, 2, or 1 output number** | User input: "4" | Output: "4"
 **Numbers above 0 that contain a 1 are replaced with "Beep!" and 1 takes priority** | User Input: "11" | Output:(0, "Beep!", "Boop!"... "Beep!")
 **Numbers above 0 that contain a 2 are replaced with "Boop!" and 1 takes priority** | User Input: "24" | Output: (0, "Beep!", "Boop!"... "Boop!")
 **Numbers above 0 that contain a 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that" and 3 takes priority** | User Input: "13" | Output: (0, "Beep!", "Boop!"... "I'm sorry, Dave. I'm afraid I can't do that")

## Setup/Installation Requirements

Clone GitHub project repository and open index file into internet browser. This project was tested and works with Google Chrome browser.

* internet service required when cloning project repository onto local computer.


## Known Bugs

There are no known bugs at this time but may be subject to change.

## Support and contact details

If there are any issues or bugs the developer may not be aware of please contact at:

#### * saul_ordonez@gmail.com
#### * (503)-382-9034

## Technologies Used

* HTML
* Javascript
* CSS
* jQuery
* Bootstrap
* Atom text editor
* Google Chrome

### License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2019 **_Saul Ordonez_**
