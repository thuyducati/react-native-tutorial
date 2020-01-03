import React, { Component } from 'react';

import ImageComponent from './src/basic_components/image'
import ScrollViewComponent from './src/basic_components/scroll_view'
import TextInputComponent from './src/basic_components/text_input'
import TextComponent from './src/basic_components/text'
import ViewComponent from './src/basic_components/view'

import ButtonComponent from './src/user_interface/button'

import FlatListComponent from './src/list_views/flatlist'
import HorizontalFlatListComponent from './src/list_views/horizontal-flatlist'
import SectionListComponent from './src/list_views/sectionlist'

import FlatListWithDataFromServer from './src/networking/flatlist-data-from-server'

import Main from './src/the_basics/Main'
import HandlingTextInput from './src/the_basics/HandlingTextInput'
import HandlingTouches from './src/the_basics/HandlingTouches'
import ScrollView from './src/the_basics/ScrollView'
import ListViews from './src/the_basics/ListViews'
import Networking from './src/the_basics/Networking'

export default class App extends Component {
  render() {
    return (
      // <ImageComponent />
      // <ScrollViewComponent />
      // <TextInputComponent />
      // <TextComponent />
      <ViewComponent />

      // <ButtonComponent />

      // <FlatListComponent />
      // <HorizontalFlatListComponent />
      // <SectionListComponent />

      // <FlatListWithDataFromServer />
    )
  }
}