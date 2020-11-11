const upStrings = () => {
    const text = document.getElementById("ciphertext").value;
    console.log(text);

    let newcodes = Array.prototype.map.call(text, (t)=>{
        let code = t.charCodeAt(0);
        console.log("originalcode :",code);
        switch(code) {
            case (32 || 12288 || 44 || 46): //そのまま 半角32 全角12288　,44 .46
                return code;
            case (97): //a->z
                return 122;
            case (65): //A->Z
                return 90;
            default:
                return code-1;
        }
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
        switch(code) {
            case (32 || 12288 || 44 || 46): //そのまま 半角32 全角12288　,44 .46
                return code;
            case (122): //z->a
                return 97;
            case (90): //Z->A
                return 65;
            default:
                return code+1;
        }
    })
    let newtext = String.fromCharCode(...newcodes);

    console.log(newtext);
    document.getElementById("ciphertext").value = newtext;
}