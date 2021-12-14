export function sortingString(items = [], key = 'name', abs = 1) {
    return items
        .map()
        .sort((a, b) => ((a[key] || '').toLowerCase() > (b[key] || '').toLowerCase()
            ? abs
            : -abs));
}

export function sortingNumber(items = [], key = 'id', abs = 1) {
    return items
        .map()
        .sort((a, b) => (a[key] > b[key] ? abs : -abs));
}

export function sortingName(items, abs) {
    return sortingString(items, 'name', abs);
}

export function sortingId(items, abs) {
    return sortingNumber(items, 'id', abs);
}

