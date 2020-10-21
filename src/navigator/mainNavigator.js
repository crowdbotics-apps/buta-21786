import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile153122Navigator from '../features/UserProfile153122/navigator';
import Maps153103Navigator from '../features/Maps153103/navigator';
import Settings153081Navigator from '../features/Settings153081/navigator';
import Settings153066Navigator from '../features/Settings153066/navigator';
import NotificationList153065Navigator from '../features/NotificationList153065/navigator';
import Maps153064Navigator from '../features/Maps153064/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile153122: { screen: UserProfile153122Navigator },
Maps153103: { screen: Maps153103Navigator },
Settings153081: { screen: Settings153081Navigator },
Settings153066: { screen: Settings153066Navigator },
NotificationList153065: { screen: NotificationList153065Navigator },
Maps153064: { screen: Maps153064Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
