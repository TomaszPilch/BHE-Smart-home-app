// @flow
import React from 'react'
import { View } from 'react-native'
import { Header as HeaderElements } from 'react-native-elements'
import { useTheme } from '@react-navigation/native'

import HeaderStyles from './HeaderStyles'
import HeaderCenterPart from './HeaderCenterPart'

import Colors from '../../themes/Colors'

type HeaderProps = {
  backButton?: boolean,
  image: string,
  onBackButtonPress?: Function,
  title: string,
}

const Header = (props: HeaderProps) => {
  const theme = useTheme()
  const styles = HeaderStyles(theme)

  return (
    <HeaderElements
      ViewComponent={View}
      backgroundColor={Colors.transparent}
      centerComponent={
        <HeaderCenterPart
          backButton={props.backButton}
          image={props.image}
          onBackButtonPress={props.onBackButtonPress}
          title={props.title}
        />
      }
      containerStyle={styles.headerContainer}
    />
  )
}

export default React.memo(Header)
