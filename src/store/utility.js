export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};

export const loadItem = (name) => {
    try {
        const serializedItem = localStorage.getItem(name);
        if (serializedItem === null) {
            return undefined;
        }
        return JSON.parse(serializedItem);
    } catch (err) {
        return undefined;
    }
};

export const saveItem = (name, item) => {
    try {
        const serializedItem = JSON.stringify(item);
        localStorage.setItem(name, serializedItem);
    } catch (err) {
    }
};

export const deleteItem = (name) => {
    try {
        localStorage.removeItem(name);
    } catch (err) {
    }
};