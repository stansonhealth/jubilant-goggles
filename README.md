# jubilant-goggles


### File names and folders
When creating new files and folders you should use the following casing to keep everything organized.
- All Folders should be `kebab-case`.
- All tsx files should be `PascalCase`.
- All other files should be `kebab-case`.

We want to make sure that the extension used reflects the code. This means you should use `.tsx` for files that return JSX elements. Anything else should have the `.ts` extension
```
foobar/
    - Foobar.tsx
    - foobar.service.ts
    - foobar.reducer.ts
    - foobar.context.ts
    - use-foobar.hook.ts 
```

### Hooks conventions
We try to use one exported hook / service / context / reducer per file. This will ensure that the code in the files does not get to complicated and hard to read

### Component casing
All components should be written in pascal-casing
```jsx
<Component></Component>
```

### Property casing

There are two types of properties we define
1. component properties where you insert a full JSX Element into the property like shown below. These will need to be written in pascal-case like the components
```jsx
<Component ComponentProp={<Foo />}></Component>
```
2. regular properties where it is not a JSX Element
```jsx
<Component someOtherProp={1} fooBar="foo"></Component>
```

### General Naming
Make sure you use variable names that make sense to what they actually are.