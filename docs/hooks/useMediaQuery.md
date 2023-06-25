## ```useMediaQuery(mediaquery: string)```

The `useMediaQuery` custom hook takes an media query string as its argument and returns a boolean stateful response.
This state is true whenever the media query is satisfied and false otherwise.

```js
function App() {
  // You can use any @media property
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <div className="App">
      {isDesktop ? <h1>Desktop</h1> : <h1>Mobile</h1>}
      <Navbar isDesktop={isDesktop}/>
    </div>
  );
}
```