import * as React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { HomeScreen } from './Pages/HomePage/HomePage.component';
import { ViewPager } from 'react-native-ui-kitten';

export default function App() {
  return (
      <ApplicationProvider
        mapping={mapping}
        theme={lightTheme}>
        <ViewPager
        	selectedIndex='0'>
        </ViewPager>
        <HomeScreen/>
      </ApplicationProvider>
  );
}
