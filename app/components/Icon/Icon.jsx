// @flow
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { Icon as IconLib } from 'react-native-elements'

type IconProps = {
  name: string,
  size: 'm' | 'l' | 'xl' | 'xxl',
  type?: string,
}

const Icon = (props: IconProps) => {
  const theme = useTheme()

  return (
    <IconLib
      color={theme.colors.primaryText}
      name={props.name}
      size={theme.metrics.icons[props.size]}
      type={props.type || 'material-community'}
    />
  )
}

export default React.memo(Icon)
