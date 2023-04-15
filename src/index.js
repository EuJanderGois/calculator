import { setIcons, getIcons, getKeys, input } from "./modules/index";

const app = window;
app.onload = async ()=>{
    await setIcons();
    const icon = getIcons();
    const key = getKeys();

    key.C.onclick = ()=>{
        let actualValue = input.value;
        input.setAttribute("placeholder","");
        if (actualValue){
            input.value = '';
        }
    }
    key.DEL.onclick = ()=>{
        let actualValue = input.value;
        if (actualValue){
            input.value = actualValue.slice(0, actualValue.length - 1);
        }
    }
    key.ONE.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        if (checkLength) {
            if (actualValue) {
                input.value = actualValue + '1';
            }
            else {
                input.value = '1';
            }
        }
    }
    key.TWO.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        if (checkLength) {
            if (actualValue) {
                input.value = actualValue + '2';
            }
            else {
                input.value = '2';
            }
        }
    }
    key.TREE.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        if (checkLength) {
            if (actualValue) {
                input.value = actualValue + '3';
            }
            else {
                input.value = '3';
            }
        }
    }
    key.FOUR.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        if (checkLength) {
            if (actualValue) {
                input.value = actualValue + '4';
            }
            else {
                input.value = '4';
            }
        }
    }
    key.FIVE.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        if (checkLength) {
            if (actualValue) {
                input.value = actualValue + '5';
            }
            else {
                input.value = '5';
            }
        }
    }
    key.SIX.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        if (checkLength) {
            if (actualValue) {
                input.value = actualValue + '6';
            }
            else {
                input.value = '6';
            }
        }
    }
    key.SEVEN.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        if (checkLength) {
            if (actualValue) {
                input.value = actualValue + '7';
            }
            else {
                input.value = '7';
            }
        }
    }
    key.EIGHT.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        if (checkLength) {
            if (actualValue) {
                input.value = actualValue + '8';
            }
            else {
                input.value = '8';
            }
        }
    }
    key.NINE.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        if (checkLength) {
            if (actualValue) {
                input.value = actualValue + '9';
            }
            else {
                input.value = '9';
            }
        }
    }
    key.ZERO.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        if (checkLength) {
            if (actualValue) {
                input.value = actualValue + '0';
            }
            else {
                input.value = '0';
            }
        }
    }



    function checkChars(lastChar){
        if (
            lastChar !== '+' &&
            lastChar !== '-' &&
            lastChar !== '.' &&
            lastChar !== ' ' &&
            lastChar !== 'x' &&
            lastChar !== '/' &&
            lastChar !== '%'
        ){
            return true;
        }
    }
    function checkSize(actualValue){
        if (actualValue.length <= 12){
            return true;
        }
    }
    key.DOT.onclick = ()=>{
        let actualValue = input.value;
        if (actualValue) {
            let lastChar = actualValue.slice(-1);
            let lastCharCheck = checkChars(lastChar);
            let checkLength = checkSize(actualValue);
            if (lastCharCheck && checkLength){
                input.value = actualValue + '.'
            }
        }
    }
    key.PLUS.onclick = async ()=>{
        let actualValue = input.value;
        if (actualValue) {
            let lastChar = actualValue.slice(-1);
            let lastCharCheck = checkChars(lastChar);
            let checkLength = checkSize(actualValue);
            if (lastCharCheck && checkLength){
                input.value = actualValue + '+';
                
            }
        }
    }
    key.MINUS.onclick = ()=>{
        let actualValue = input.value;
        if (actualValue) {
            let lastChar = actualValue.slice(-1);
            let lastCharCheck = checkChars(lastChar);
            let checkLength = checkSize(actualValue);
            if (lastCharCheck && checkLength){
                input.value = actualValue + '-'
            }
        }
    }
    key.MULTI.onclick = ()=>{
        let actualValue = input.value;
        if (actualValue) {
            let lastChar = actualValue.slice(-1);
            let lastCharCheck = checkChars(lastChar);
            let checkLength = checkSize(actualValue);
            if (lastCharCheck && checkLength){
                input.value = actualValue + '*'
            }
        }
    }
    key.DIV.onclick = ()=>{
        let actualValue = input.value;
        if (actualValue) {
            let lastChar = actualValue.slice(-1);
            let lastCharCheck = checkChars(lastChar);
            let checkLength = checkSize(actualValue);
            if (lastCharCheck && checkLength){
                input.value = actualValue + '/'
            }
        }
    }
    key.INFO.onclick = ()=>{
        let actualValue = input.value;
    }
    key.EQUAL.onclick = ()=>{
        let actualValue = input.value;
        let checkLength = checkSize(actualValue);
        let lastChar = actualValue.slice(-1);
        let lastCharCheck = checkChars(lastChar);
        if (actualValue && lastCharCheck && checkLength){
            let result = eval(actualValue);
            input.value = result;
        }
    }
}