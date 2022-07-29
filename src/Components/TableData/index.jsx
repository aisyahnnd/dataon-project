
import { Table } from 'antd'
import './table.css'
import PropTypes from 'prop-types'
function TableData ({ pagination, columns, dataTable }) {
  return (
          <Table dataSource={dataTable} columns={columns} pagination={pagination} />
  )
}

TableData.propTypes = {
  pagination: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  dataTable: PropTypes.array
}
TableData.defaultProps = {
  pagination: { defaultPageSize: 2 }
}

export default TableData
