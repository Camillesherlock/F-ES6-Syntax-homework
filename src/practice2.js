// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
    // TODO contents与index不是很有必要
    const contents = sections.map(key => key.content)
    // TODO 不要使用index命名
    const index = sections.map(key => key.index)
    // TODO 不是map的使用场景
    contents.map((value,position) => {
        console.log(value)
        items.splice(index[position]+position,0,value);
    })
    return items;
}
export { inject };
