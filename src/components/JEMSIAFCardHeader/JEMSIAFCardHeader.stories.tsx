/* eslint-disable */
import React from 'react'
import JEMSIAFCardHeader from './JEMSIAFCardHeader'
import toaster from 'toastify-react'

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

const toggled = (event: React.ChangeEvent<HTMLInputElement>) => {
  toaster.success(`Toggle state is ${event.target.checked? "ON" : "OFF"}`)
}

export const Responsive = Template.bind({})
Responsive.story = {
  name: 'Responsive'
}

Responsive.args = {
  title: 'Flip the toggle',
  onChange: toggled
}
