const inject = (items, sections) => {
    const contents = sections.map(key => key.content)
    const index = sections.map(key => key.index)
    contents.map((value,position) => {
        console.log(value)
        items.splice(index[position]+position,0,value);
    })
    return items;
}
export { inject };
