const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('id');
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}
const setLocalStorage = (id) => {
    const data = getDataFromLocalStorage();
    const reWrite = data.find((job) => job === id)
    if (!reWrite) {
        data.push(id)
        localStorage.setItem('id', JSON.stringify(data))
    }

}
export { setLocalStorage, getDataFromLocalStorage }