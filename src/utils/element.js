import {
  Table,
  TableColumn,
  Input,
  Button,
  Dialog,
  Form,
  FormItem,
  Pagination
} from 'element-ui'


const Elplugin = [Table, TableColumn, Input, Button, Dialog, Form, FormItem, Pagination]

export default (app) => {
  Elplugin.forEach(plugin => {
    app.use(plugin)
  })
}