// The variable declarations
let the_text = "I Feel Calm, Really."
let lowerCase = "";
let upperCase = "";
let html = `<p>The Original Text: <strong>${the_text}<br><br></strong>`;


// ****************************************************
//The function calls
lowerString(the_text);
upperString(the_text);
let upperEl = document.getElementById("upper");
upperEl.innerHTML = html;
toStringMethod();
stringTrim("     Once upon a time...     ");

// ****************************************************
// The function to convert the text into lowercase.
function lowerString(text){
    lowerCase = text.toLowerCase();
    html += `text.toLowerCase(): <strong>${lowerCase}</strong><br><br>`;
}

// ****************************************************
//The function to convert the text into uppercase.
function upperString(text){
    upperCase = text.toUpperCase();
    html += `text.toUpperCase(): <strong>${upperCase}</strong>`;
}

// ****************************************************

// The function of toString() Method
function toStringMethod(){
    let string_obj = new String("Cool");
    let ht = `let string_obj = new String("Cool"): <strong>${string_obj} </strong><br>`;
    ht += `<em>look string object in the console.</em><br><br>`;
    console.log(string_obj);
    let string_lit = string_obj.toString();
    ht += `let string_lit = string_obj.toString(): <strong>${string_lit}</strong><br>`;
    ht += `<em>look string literal in the console too.</em>`;
    console.log(string_lit);
    let stringEl = document.getElementById("stringLit");
    stringEl.innerHTML = ht;
}


// ****************************************************
//The trim() Method

function stringTrim(text){
    let htm = `The original text before trim:<em> ${text}</em><br><br>`;
    htm += `trimmed_text = text.trim():`;
    let trimmed_text = text.trim();
    htm += `<strong>${trimmed_text}</strong>`;
    let trimEl = document.getElementById("trim");
    trimEl.innerHTML = htm;
}
