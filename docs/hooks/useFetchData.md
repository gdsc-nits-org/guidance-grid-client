## ```useFetchData(url: API Endpoint)```

The `useFetchData` custom hook takes an API endpoint as its argument and returns
a stateful object of the following structure:
```js
{
    "loading": Boolean,
    "response":  Array,
    "error": Error
}
```

Example Usage:

```jsx
import { useFetchData } from "/path/to/Hooks/"

const [resp] = useFetchData(`${BASE_URL}/api/v1/posts`)

{resp.loading && <Loading />}
{resp.error && <Error msg={resp.error} />}
{resp.response && <Posts msg={resp.response} />}

```

`resp` is a stateful object. So any time there is a change in it,
it will cause the component which uses it to re-render.

Until and unless there is a response from the API or an Error, `loading`
is set to True.

By default, `resp` is :

```js
{
    "loading": true,
    "response":  [],
    "error": null
}
```
