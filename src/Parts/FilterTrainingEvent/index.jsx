
import { ButtonIcon, SelectBox, TextInput, Toggle } from '../../Components'
import './filterTrainingEvent.css'
import { UnorderedListOutlined } from '@ant-design/icons'
const FilterTrainingEvent = () => {
  return (
    <div className='container'>
        <TextInput label="Search Training" placeholder="Search Training" style={{ width: 280, borderRadius: 5 }} ></TextInput>
        <SelectBox type="event" style={{ width: 280 }}></SelectBox>
        <SelectBox type="status" style={{ width: 280 }}></SelectBox>
          <div className='switch'>
            <Toggle label="Related Job Only"></Toggle>
          </div>
          <div className='wrapperButton'>
          <ButtonIcon textButton='View All List' style={{ borderRadius: 5, width: 200 }} icon={<UnorderedListOutlined />}></ButtonIcon>
          </div>
      </div>
  )
}

export default FilterTrainingEvent
