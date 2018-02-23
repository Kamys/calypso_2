const loadStore = () => {
    try {
        const serializedState = localStorage.getItem('stage');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveStore = (state) => {
    try {
        localStorage.setItem('stage', JSON.stringify(state));
    } catch (err) {
        console.log("Failed save state in localStorage!")
    }
};

export {loadStore, saveStore};