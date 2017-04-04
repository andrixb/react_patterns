// import React from 'react';
// import SimpleComponentWithEventBinding from './SimpleComponentWithEventBinding';
// import renderer from 'react-test-renderer';
//
// test('Link changes the CSS classes on mouse over', () => {
//     const component = renderer.create(
//         <SimpleComponentWithEventBinding page="http://www.google.es">
//             Link
//         </SimpleComponentWithEventBinding>
//     );
//
//     let tree = component.toJSON();
//     console.log('dasdsada', component);
//     expect(tree).toMatchSnapshot();
//
//     tree.props.onMouseEnter();
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//
//     tree.props.onMouseLeave();
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });
