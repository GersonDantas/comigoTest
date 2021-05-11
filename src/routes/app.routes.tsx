import React from 'react';
import DashBoard from '../pages/Dashboard/index';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen
            name="Map"
            component={DashBoard}
        />
    </AppStack.Navigator>
);

export default AppRoutes;