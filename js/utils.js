'use strict'
function $qs(selector, scope = document){
    return scope.querySelector(selector)
};

function $qsa(selector,scope = document){
    return scope.querySelectorAll(selector)
};

function $cel(tag, props = {}, text){
    const elem = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => (elem[key] = value));

    if(text && typeof text === 'string'){
        elem.appendChild(document.createTextNode(text));
    };
    return elem;
}