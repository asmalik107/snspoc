/** @format */

import {Navigation} from "react-native-navigation";
import App from './App';
import Home from "./src/Home";
import Settings from "./src/Settings";
import analytics from '@segment/analytics-react-native';
import config from './config.json';

analytics.setup(config.SEGMENT_KEY, {
    // Record screen views automatically!
    recordScreenViews: true,
    // Record certain application events automatically!
    trackAppLifecycleEvents: true
});


Navigation.registerComponent(`am.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(`am.playground.Home`, () => Home);
Navigation.registerComponent(`am.playground.Settings`, () => Settings);

const rootComponent = {
    name: "am.playground.WelcomeScreen"
};

const bottomTabs = {
    children: [
        {
            stack: {
                children: [
                    {
                        component: {
                            name: 'am.playground.WelcomeScreen',
                        }
                    }
                ],
                options: {
                    bottomTab: {
                        text: 'Welcome',
                        icon: require('./images/one.png'),
                        iconColor: '#1B4C77',
                        selectedIconColor: '#EC008C',
                        selectedTextColor: '#EC008C',
                        selectedIcon: require('./images/one_selected.png')
                    }
                }
            }
        },
       {
            component: {
                name: 'am.playground.Home',
                options: {
                    bottomTab: {
                        text: 'Home',
                        icon: require('./images/two.png'),
                        iconColor: '#1B4C77',
                        selectedIconColor: '#EC008C',
                        selectedTextColor: '#EC008C'
                    }
                }
            }
        },
        {
            component: {
                name: 'am.playground.Settings',
                options: {
                    bottomTab: {
                        text: 'Settings',
                        icon: require('./images/three.png'),
                        iconColor: '#1B4C77',
                        selectedIconColor: '#EC008C',
                        selectedTextColor: '#EC008C'
                    }
                }
            }
        }
    ],
    options: {}
};


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            bottomTabs
        }
    });
});
