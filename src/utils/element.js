import {
  Table,
  TableColumn,
  Input,
  Button
} from 'element-ui'


const Elplugin = [Table, TableColumn, Input, Button]

export default (app) => {
  Elplugin.forEach(plugin => {
    app.use(plugin)
  })
}