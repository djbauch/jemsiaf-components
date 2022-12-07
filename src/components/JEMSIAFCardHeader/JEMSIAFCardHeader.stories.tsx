/* eslint-disable */
import JEMSIAFCardHeader from './JEMSIAFCardHeader'

export default {
  title: "JEMSIAFCardHeader",
  component: JEMSIAFCardHeader
}

const Template = args => <JEMSIAFCardHeader {...args} />

export const Default = Template.bind({})

Default.story = {
  name: 'default',
}

export const Titled = Template.bind({})
Titled.story = {
  name: 'Titled'
}
Titled.args = {
  title: 'COCOMs'
}
