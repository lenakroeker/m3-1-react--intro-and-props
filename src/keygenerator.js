export default function generateKey(variable) {
    return (Math.random() * 100000) + variable + (Math.random() * 100000);
}

