const parseData = ({data,column}) => {
  const keys = column.map(key => key.name)
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