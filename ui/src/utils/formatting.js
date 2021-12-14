export function formattingOption(items) {
    items = items.map(i => ({
        ...i,
        value: i.id,
        text: i.name,
    }));
    return items;
}
