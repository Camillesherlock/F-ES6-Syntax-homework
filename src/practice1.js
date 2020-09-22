// TODO 可以思考一下可否用reduce来做
const parseData = ({data,column}) => {
  // TODO keys 没有必要
  const keys = column.map(key => key.name)
  // TODO 使用map做数组与数组的转化，不用声明新数组
  const datas = [];
  data.map(key => {
      const values = {}
      key.map((items,index) => {
        values[keys[index]] = items
      })
      datas.push(values)
  })
   return datas;
}

export {parseData}