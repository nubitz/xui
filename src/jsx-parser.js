export function _j(name, attrs, ...children) {
    if(typeof name == 'string') {
        const el = document.createElement(name);
        Object.entries(attrs || {}).forEach(
            ([key, value]) => { 
            if("function" != typeof value) {
                if("object" == typeof value) {
                    value = JSON.stringify(value);
                }
                key = key.replace(" ", "")
                .replace(/([A-Z])/g, "-$1")
                .toLocaleLowerCase();
                ("boolean" == typeof value) 
                    ?  value == false 
                        ? el.removeAttribute(key)
                        : el.setAttribute(key,"")
                    : el.setAttribute(key, value);
            } else {
                el[key] = value;
            }
        });
        for (const child of children) {  
            ("object" == typeof child) 
                ? el.appendChild(child)
                : el.textContent = child;
        }
        return el;
    }
}
