const upStrings = () => {
    const text = document.getElementById("ciphertext").value;
    console.log(text);

    let newcodes = Array.prototype.map.call(text, (t)=>{
        let code = t.charCodeAt(0);
        console.log("code :",code);
        return code-1;
    })
    let newtext = String.fromCharCode(...newcodes);

    console.log(newtext);
    document.getElementById("ciphertext").value = newtext;
}

const downStrings = () => {
    const text = document.getElementById("ciphertext").value;
    console.log(text);

    let newcodes = Array.prototype.map.call(text, (t)=>{
        let code = t.charCodeAt(0);
        console.log("code :",code);
        return code+1;
    })
    let newtext = String.fromCharCode(...newcodes);

    console.log(newtext);
    document.getElementById("ciphertext").value = newtext;
}