/*
	DankCode - v0.1.0
	Beta 03.03.2023

	A JavaScript Supibot library for better and cozy coding

	License: GPLv3
	Contributors: RiderOnThe_Storm
*/

/////////////////// 4HEADER ///////////////////

// Type here authors of your project as array of strings
const CONTRIBUTORS = [];
// Type here version of your project as string
const VERSION = "";
// Enable this only in browser if DC_DEBUG_METHOD equals "browser"!
const DEBUG = false;
// "browser" - Debugging for browsers; "chat" - Debugging for chat
const DEBUG_METHOD = "chat";

// Don't modify that
const DC_VERSION = "0.1.0";
const DC_RELEASE = "beta";

var ERRORS = [];
var WARNS = [];

emote = "";

if (DEBUG && DEBUG_METHOD == "browser"){
	var args = [];
	inp = prompt("Enter arguments:");

	if (inp != ""){
		for (let e of inp){
			args.push(e);
		}
	}

	const executor = "dankcodedebug";
	const channel = "dankcodedebug";
	const platform = "twitch";
}

/////////////////// MAIN ///////////////////

/// Main functions

function log(s, type_=""){
	if (DEBUG){
		switch (type_){
			case "error":
				if (DEBUG_METHOD == "browser"){
					console.error("[DankCode] " + s);
				} else {
					print("[DankCode:Error] " + s);
				}
				ERRORS.errors.push(s);
				break;
			case "warn":
				if (DEBUG_METHOD == "browser"){
					console.warn("[DankCode] " + s);
				} else {
					print("[DankCode:Warning] " + s);
				}
				WARNS.warns.push(s);
				break;
			default:
				if (DEBUG_METHOD == "browser"){
					console.log("[DankCode] " + s);
				} else {
					print("[DankCode:Log] " + s);
				}
				break;
		}
	}
}

function printOut(s){
	emote = s;
}

function print(s){
	var i = 0;
	var out = [];

	if (typeof(s) != "string"){
		log("[print] Type a valid string into <s> argument: print("+s+")", "error");
	} else {
		out.push("");

		for (var e of s){
			if (i == 38){
				out.push("");
				i = 0;
			} else {
				out[(out.length == 0 ? out.length : out.length - 1)] += e;
				i += 1;
			}
		}

		if(out[out.length - 1].length < 38){
			out[out.length - 1] += "⠀".repeat(38 - out[out.length - 1].length);
		}

		for (let e of out){
			emote += e;
		}
	}
}

/// Random functions

function randInt(a, b){
	try{
		if (typeof(a) == "number" && typeof(b) == "number"){
			return Math.floor(Math.random() * b + a);
		} else {
			log("[randInt] Invalid data type of <a> or <b> argument: randInt("+a+", "+b+")", "error");
			return false;
		}
	} catch(err){
		log("[randInt] "+err, "error");
	}
}

function randRng(a){
	try{
		if (typeof(a) == "number"){
			return Math.round(Math.random() * a);
		} else {
			log("[randRng] Invalid data type of <a> argument: randRng("+a+")", "error");
			return false;
		}
	} catch(err){
		log("[randRng] "+err, "error");
	}
}

function randElm(arr){
	try{
		if (typeof(arr) == "object"){
			return arr[randRng(arr.length)];
		} else {
			log("[randElm] Invalid data type of <arr> argument: randElm("+arr+")", "error");
			return false;
		}
	} catch(err){
		log("[randElm] "+err, "error");
	}
}

function randBin(add=0){
	try{
		if (typeof(add) == "number"){
			return Math.round(Math.random() + add);
		} else {
			log("[randBin] Invalid data type of <add> argument: randBin("+add+")", "error");
			return Math.round(Math.random());
		}
	} catch(err){
		log("[randBin] "+err, "error");
	}
}

/// Strings

function reverseStr(s){
	try{
		return s.split("").reverse().join("");
	} catch(err){
		log("[reverseStr] "+err, "error");
	}
}

/////////////////// CODE AREA ///////////////////

// Your code here:
// print("Hello World!");

/////////////////// ENDING ///////////////////

if (DEBUG && DEBUG_METHOD == "browser"){
	alert(emote);
}