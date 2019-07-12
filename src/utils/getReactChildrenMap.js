import React from "react";

const getReactChildrenMap = children => {
  const reactChildren = {};
  const otherChildren = [];

  /* We can store the actual name of the component through the displayName or name property of our sub-component */
  React.Children.forEach(children, child => {
    if (child.type) {
      const componentName = child.type.name || child.type.displayName;
      if (componentName) {
        reactChildren[componentName] = child;
      } else {
        otherChildren.push(child);
      }
    }
  });
  return { reactChildren, otherChildren };
};

export default getReactChildrenMap;
