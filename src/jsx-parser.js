export function _j(name, attrs, ...children) {
    if(typeof name == 'string') {
        const el = document.createElement(name);
        Object.entries(attrs || {}).forEach(
            ([key, value]) => { 
                key = key.replace(" ", "").replace(/([A-Z])/g, "-$1").toLocaleLowerCase(); 
                switch(typeof value) {
                    case 'object':
                         value = JSON.stringify(value);
                         el.setAttribute(key, value);
                        break;
                    case 'boolean':
                        (value == false) 
                        ? el.removeAttribute(key)
                        : el.setAttribute(key,"")
                        break;
                    case 'function':
                         el[key] = value;
                    break;
                    default:
                        (!value) 
                            ? el.removeAttribute(key)
                            : el.setAttribute(key, value);
                }
        });
        for (const child of children) { 
            if(child instanceof Array) {
                child.forEach(node => {
                    el.appendChild(node);
                });
            } else {
            ("object" == typeof child) 
                ? el.appendChild(child)
                : el.innerHTML += child;
            }
        }
        return el;
    }
}
