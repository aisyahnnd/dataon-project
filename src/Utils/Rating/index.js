import { Rate } from 'antd'
const Rating = (rating) => {
  return (
    <div><Rate disabled allowHalf defaultValue={0} value={rating}></Rate></div>
  )
}

export default Rating
