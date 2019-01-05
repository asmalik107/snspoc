/** @format */

import { Navigation } from "react-native-navigation";
import App from './App';

Navigation.registerComponent(`am.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
    root: {
        component: {
        name: "am.playground.WelcomeScreen"
        }
       }
    });
});
