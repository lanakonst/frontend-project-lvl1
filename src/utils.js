export default (max = 100, min = -100) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};