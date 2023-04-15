
function getKeys(){
    const cKey = getID('c');
    const delKey = getID('del');
    const infoKey = getID('info');
    const divKey = getID('div');
    const sevenKey= getID('seven');
    const eightKey = getID('eight');
    const nineKey = getID('nine');
    const multiKey = getID('multi');
    const fourKey = getID('four');
    const fiveKey = getID('five');
    const sixKey = getID('six');
    const minusKey = getID('minus');
    const oneKey = getID('one');
    const twoKey = getID('two');
    const treeKey = getID('tree');
    const plusKey = getID('plus');
    const configKey = getID('config');
    const zeroKey = getID('zero');
    const dotKey = getID('dot');
    const equalKey = getID('equal');
    return {
        C: cKey,
        DEL: delKey,
        INFO: infoKey,
        DIV: divKey,
        SEVEN: sevenKey,
        EIGHT: eightKey,
        NINE: nineKey,
        MULTI: multiKey,
        FOUR: fourKey,
        FIVE: fiveKey,
        SIX: sixKey,
        MINUS: minusKey,
        ONE: oneKey,
        TWO: twoKey,
        TREE: treeKey,
        PLUS: plusKey,
        CONFIG: configKey,
        ZERO: zeroKey,
        DOT: dotKey,
        EQUAL: equalKey
    }
}
async function setIcons(){
    await add(KEY.C, ICON.c);
    await add(KEY.DEL, ICON.delete);
    await add(KEY.INFO, ICON.info);
    await add(KEY.DIV, ICON.division);
    await add(KEY.SEVEN, ICON.seven);
    await add(KEY.EIGHT, ICON.eight);
    await add(KEY.NINE, ICON.nine);
    await add(KEY.MULTI, ICON.multi);
    await add(KEY.FOUR, ICON.four);
    await add(KEY.FIVE, ICON.five);
    await add(KEY.SIX, ICON.six);
    await add(KEY.MINUS, ICON.minus);
    await add(KEY.ONE, ICON.one);
    await add(KEY.TWO, ICON.two);
    await add(KEY.TREE, ICON.tree);
    await add(KEY.PLUS, ICON.plus);
    await add(KEY.CONFIG, ICON.gear);
    await add(KEY.ZERO, ICON.zero);
    await add(KEY.DOT, ICON.dot);
    await add(KEY.EQUAL, ICON.equals);
}
function getIcons(){
    let zeroE = getID('zeroSVG');
    let oneE = getID('oneSVG');
    let twoE = getID('twoSVG');
    let treeE = getID('treeSVG');
    let fourE = getID('fourSVG');
    let fiveE = getID('fiveSVG');
    let sixE = getID('sixSVG');
    let sevenE = getID('sevenSVG');
    let eightE = getID('eightSVG');
    let nineE = getID('nineSVG');
    let cE = getID('cSVG');
    let delE = getID('deleteSVG');
    let equalsE = getID('equalsSVG');
    let gearE = getID('gearSVG');
    let gripE = getID('gripSVG');
    let infoE = getID('infoSVG');
    let minusE = getID('minusSVG');
    let percentE = getID('percentSVG');
    let plusE = getID('plusSVG');
    let xE = getID('xSVG');
    return {
        zero: zeroE,
        one: oneE,
        two: twoE,
        tree: treeE,
        four: fourE,
        five: fiveE,
        six: sixE,
        seven: sevenE,
        eight: eightE,
        nine: nineE,
        c: cE,
        del: delE,
        equals: equalsE,
        gear: gearE,
        grip: gripE,
        info: infoE,
        minus: minusE,
        percent: percentE,
        plus: plusE,
        x: xE
    }
}
function getID(element){
    return document.getElementById(element);
}
async function add(element, content){
    return element.innerHTML = content;
}
const KEY = getKeys();
const ICON = Icon();
const input = getID("input");

function Icon(){
    const iconProps = {
        color: "#000",
        width: "35px",
        height: "35px"
    }
    return {
        zero: `<svg id="zeroSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z"/></svg>`,
        one: `<svg id="oneSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z"/></svg>`,
        two: `<svg id="twoSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z"/></svg>`,
        tree: `<svg id="treeSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z"/></svg>`,
        four: `<svg id="fourSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z"/></svg>`,
        five: `<svg id="fiveSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z"/></svg>`,
        six: `<svg id="sixSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z"/></svg>`,
        seven: `<svg id="sevenSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 64C0 46.3 14.3 32 32 32H288c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64z"/></svg>`,
        eight: `<svg id="eightSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h15.9c0 0 .1 0 .1 0h32c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0H144c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z"/></svg>`,
        nine: `<svg id="nineSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z"/></svg>`,
        c: `<svg id="cSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M329.1 142.9c-62.5-62.5-155.8-62.5-218.3 0s-62.5 163.8 0 226.3s155.8 62.5 218.3 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3c-87.5 87.5-221.3 87.5-308.8 0s-87.5-229.3 0-316.8s221.3-87.5 308.8 0c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z"/></svg>`,
        delete: `<svg id="deleteSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>`,
        equals: `<svg id="equalsSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H48zm0 192c-17.7 0-32 14.3-32 32s14.3 32 32 32H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H48z"/></svg>`,
        gear: `<svg id="gearSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>`,
        grip: `<svg id="gripSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg>`,
        info: `<svg id="infoSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>`,
        minus: `<svg id="minusSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>`,
        percent: `<svg id="percentSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>`,
        plus: `<svg id="plusSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>`,
        x: `<svg id="xSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`,
        division: `<svg id="divSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M272 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 320a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 288c17.7 0 32-14.3 32-32s-14.3-32-32-32H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H400z"/></svg>`,
        multi: `<svg id="multiSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`,
        dot: `<svg id="dotSVG" width="${iconProps.width}" height="${iconProps.height}" fill=${iconProps.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>`
    }
}

export {
    ICON,
    getKeys,
    getID,
    setIcons,
    getIcons,
    input
}