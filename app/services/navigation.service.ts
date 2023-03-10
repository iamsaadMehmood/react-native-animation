import * as React from 'react';

export const isMountedRef: any = React.createRef();
export const navigationRef: any = React.createRef();

export const navigate = (name: string, params?: any) => {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export const navigatePush = (name: string, params?: object) => {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.push(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export const goBack = () => {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack();
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};
// export const openDrawer = () => {
//   if (navigationRef.current) {
//     navigationRef.current.toggleDrawer();
//   } else {
//   }
// };
