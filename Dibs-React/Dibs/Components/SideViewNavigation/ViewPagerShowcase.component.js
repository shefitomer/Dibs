import React from 'react';
import { TabView, Tab, TabViewProps } from 'react-native-ui-kitten';

export const TabViewShowcase = (props?: TabViewProps): React.ReactElement<TabViewProps> => {
  return (
    <TabView>
      <Tab title='TAB 1'>
        <Text>Tab 1</Text>
      </Tab>
      <Tab title='TAB 2'>
        <Text>Tab 2</Text>
      </Tab>
      <Tab title='TAB 3'>
        <Text>Tab 3</Text>
      </Tab>
    </TabView>
  );
};