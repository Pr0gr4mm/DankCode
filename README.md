# DankCode

### The JavaScript library for Supibot

# Documentation:

## HOW TO USE

### Just copy source code from DankCode.js file and start writing your own code in `CODE AREA` (in the end of code) and create a new gist.
### To run this use this Supibot command:

`$dankdebug importGist:<YOUR GIST ID> force:true function:args,emote`

## DEBUGGING

### To enable debug mode, you need change value of **DEBUG** constant at the top. Recommended to debug in the browser console or on special web-interpretators.



`log("text", "type") `- outs logs in console &lt;function&gt;

_text_ -Text of log message &lt;string&gt;

_type_ - Type of log &lt;string&gt;

**Examples:**

`log("Unexpected error", "error")

log("Warning", "warn")

log("All working here")`

**Output:**

_\[DankCode\] Unexpected error_

_\[DankCode\] Warning_

_\[DankCode\] All working here_



## GET STARTED

### It's begin of learning DankCode.

### Base functions which need to know:



`printOut("text")` - Prints final output &lt;function&gt;

_text_ - Text of message &lt;string&gt;

**Examples:**

`printOut("FeelsGoodMan it's my last message")`

**Output:**

_Supibot: FeelsGoodMan it's my last message_



`print("text")` - Prints text step by step &lt;function&gt;

_text_ - Text of message &lt;string&gt;

**Examples:**

`print("Hello")

print("World!")`

**Output:**

_Supibot: Hello_

_World!_

You can execute it in any place of code and output text will formatting and with new line.

**! WARNING: Do not use printOut() if you use print(), it's erasing all previous output from print()**



## RANDOM

### It's random functions

  

`randInt(a, b)` - Returns random number in range of a and b &lt;function&gt;

_a_ - Minimum number &lt;number&gt;

_b_ - Maximum number &lt;number&gt;

**Examples:**

`randInt(1, 100)

randInt(1, 100)

randInt(1, 100)`

**Output:**

_69_

_74_

_13_



`randRng(a)` - Returns random number from 0 to a &lt;function&gt;

_a_ - Maximum number &lt;number&gt;

**Examples:**

`randRng(500)`

**Output:**

_245_



`randRng(a)` - Returns random element of array &lt;function&gt;

_arr_ - Array &lt;object&gt;

**Examples:**

`randElm(['🍏','🍍','🥝'])`

**Output:**

_🍍_



`randBin()` - Returns random binary (boolean - true or false) &lt;function&gt;

**Examples:**

`randBin()`
`randBin()`
`randBin()`

**Output:**

_1_
_0_
_1_


## STRINGS



`reverseStr(s)` - Returns reversed string &lt;function&gt;

_s_ - A string

**Examples:**

`reverseStr("Hello")`

**Output:**

_olleH_



## WHY I CAN GET ERROR

### Don't define variables with this names:

_msg, emote, args, command, platform, executor, channel, query, aliasStack, channelCustomData, customData, utils_

### Supibot allows use only limited list of utils methods:

_capitalize, randArray, random, randomString, removeAccents, shuffleArray, timeDelta, wrapString, zf_
