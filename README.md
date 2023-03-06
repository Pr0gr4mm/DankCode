# DankCode
<br>
### The JavaScript library for Supibot
<br>
# Documentation:
<br>
## HOW TO USE
<br>
### Just copy source code from DankCode.js file and start writing your own code in `CODE AREA` (in the end of code) and create a new gist.
### To run this use this Supibot command:
<br>
`$dankdebug importGist:<YOUR GIST ID> force:true function:args,emote`
<br>
## DEBUGGING
<br>
### To enable debug mode, you need change value of **DEBUG** constant at the top. Recommended to debug in the browser console or on special web-interpretators.
<br>
<br>
<br>
`log("text", "type") `- outs logs in console &lt;function&gt;
<br>
_text_ -Text of log message &lt;string&gt;
<br>
_type_ - Type of log &lt;string&gt;
<br>
**Examples:**
<br>
`log("Unexpected error", "error")
<br>
log("Warning", "warn")
<br>
log("All working here")`
<br>
**Output:**
<br>
_\[DankCode\] Unexpected error_
<br>
_\[DankCode\] Warning_
<br>
_\[DankCode\] All working here_
<br>
<br>
<br>
## GET STARTED
<br>
### It's begin of learning DankCode.
<br>
### Base functions which need to know:
<br>
<br>
<br>
`printOut("text")` - Prints final output &lt;function&gt;
<br>
_text_ - Text of message &lt;string&gt;
<br>
**Examples:**
<br>
`printOut("FeelsGoodMan it's my last message")`
<br>
**Output:**
<br>
_Supibot: FeelsGoodMan it's my last message_
<br>
<br>
<br>
`print("text")` - Prints text step by step &lt;function&gt;
<br>
_text_ - Text of message &lt;string&gt;
<br>
**Examples:**
<br>
`print("Hello")
<br>
print("World!")`
<br>
**Output:**
<br>
_Supibot: Hello_
<br>
_World!_
<br>
You can execute it in any place of code and output text will formatting and with new line.
<br>
**! WARNING: Do not use printOut() if you use print(), it's erasing all previous output from print()**
<br>
<br>
<br>
## RANDOM
<br>
### It's random functions
<br>
<br>
<br>
`randInt(a, b)` - Returns random number in range of a and b &lt;function&gt;
<br>
_a_ - Minimum number &lt;number&gt;
<br>
_b_ - Maximum number &lt;number&gt;
<br>
**Examples:**
<br>
`randInt(1, 100)`
<br>
`randInt(1, 100)`
<br>
`randInt(1, 100)`
<br>
**Output:**
<br>
_69_
<br>
_74_
<br>
_13_
<br>
<br>
<br>
`randRng(a)` - Returns random number from 0 to a &lt;function&gt;
<br>
_a_ - Maximum number &lt;number&gt;
<br>
**Examples:**
<br>
`randRng(500)`
<br>
**Output:**
<br>
_245_
<br>
<br>
<br>
`randRng(a)` - Returns random element of array &lt;function&gt;
<br>
_arr_ - Array &lt;object&gt;
<br>
**Examples:**
<br>
`randElm(['🍏','🍍','🥝'])`
<br>
**Output:**
<br>
_🍍_
<br>
<br>
<br>
`randBin()` - Returns random binary (boolean - true or false) &lt;function&gt;
<br>
**Examples:**
<br>
`randBin()`
<br>
`randBin()`
<br>
`randBin()`
<br>
**Output:**
<br>
_1_
<br>
_0_
<br>
_1_
<br>
<br>
<br>
## STRINGS
<br>
<br>
<br>
`reverseStr(s)` - Returns reversed string &lt;function&gt;
<br>
_s_ - A string
<br>
**Examples:**
<br>
`reverseStr("Hello")`
<br>
**Output:**
<br>
_olleH_
<br>
<br>
<br>
## WHY I CAN GET ERROR
<br>
### Don't define variables with this names:
<br>
_msg, emote, args, command, platform, executor, channel, query, aliasStack, channelCustomData, customData, utils_
<br>
### Supibot allows use only limited list of utils methods:
<br>
_capitalize, randArray, random, randomString, removeAccents, shuffleArray, timeDelta, wrapString, zf_
<br>
