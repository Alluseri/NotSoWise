var code = "yer code goes here!";
function analyze() {
  var flag0 = code.startsWith("//Protected by WiseLoop PHP JavaScript Obfuscator");
  var flag1 = code.includes(";eval(function(w,i,s,e)");
  return flag0 || flag1;
}
function post() {
  var flag0 = code.includes("window.location.hostname.replace(\"www.\",\"\")");
  var flag1 = code.includes("throw new Error('');");
  return flag0 && flag1;
}
var a = analyze();
console.log(a ? "The code was packed by WiseLoop, unpacking..." : "The code wasn't detected to be packed by WiseLoop.");
if (!a) if (prompt("Still attempt to unpack? (Y/N)") != "Y") process.exit();

code = code.substring(code.indexOf("\n")).trim();
code = eval("("+code.substring(";eval".length).replace(");}('",");})('"));
code = eval("("+code.substring(";eval".length).replace(");}('",");})('"));
code = eval("("+code.substring(code.indexOf("; ;eval")+"; ;eval".length).replace(");}('",");})('"));
if (post()) {
  console.log("Patching webdomain check...");
  code = code.substring(code.indexOf(");}throw new Error('');}")+");}throw new Error('');}".length);
}
console.log("Unpacked succesfully:");
console.log(code);
console.log("Use de4js or beautifier.io to make the code more readable.");
