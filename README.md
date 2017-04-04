```
	> npm install
	> npm start
```

`/components` hosts reusable components (shared)
`/features` hosts one off components that use reusable or define new ones inside itself
`/services`
`/stores` hosts actions creators, actions, reducers
i.e.
```
- features/
- features/FooComponent
- features/FooComponent/FooComponent.jsx

// this folder is used if the FooComponent has shared components inside its
// sublist of features

- features/FooComponent/components/

// this folder is used for components that are used one of and use shared
// components too
- features/FooComponent/features/

- features/FooComponent/features/BarComponent

// i.e. this uses some components from
// ../../components
// and
// ../../../../../components
- feature/FooComponent/feature/BarComponent/BarComponent.jsx

```

`./index.jsx` sets the app routing and middlewares
`./routes.jsx` hosts the entry points for the `features`
