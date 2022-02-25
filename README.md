# Estudo React Hooks

- ## [useState](https://pt-br.reactjs.org/docs/hooks-reference.html#usestate)

```js
const [state, setState] = useState(initialState);
```

Retorna um valor e uma função para atualizar o valor

[Implementação do useState no projeto](https://github.com/mateus-azevedo/studying-react-hooks/blob/master/src/UseState/index.js)
<br/>
<br/>

- ## [useEffect](https://pt-br.reactjs.org/docs/hooks-reference.html#usestate)

```js
useEffect(didUpdate);
```

<p>Mutações, assinaturas, temporizadores, logs e outros <code>side effects</code> não são permitidos dentro do corpo principal de um componente funcional.</p>
<p>Use <code>useEffect</code>. A função passada será executada depois que a renderização estiver disponíel na tela.</p>

[Implementação do useEffect no projeto](https://github.com/mateus-azevedo/studying-react-hooks/blob/master/src/UseEffect/index.js)
<br/>
<br/>

- ## [useReducer](https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer)

```js
const [state, dispatch] = useReducer(reducer, initalArg, init);
```

`useReducer` é geralmetne preferível em relação ao `useState` quando se tem uma lógica de estado complexa que envolve múltiplos sub-valores, ou quando o próximo estado depende do estado anterior.

<p>Exemplo da documentação de um contador:</p>

```js
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

[Implementação do useReducer no projeto](https://github.com/mateus-azevedo/studying-react-hooks/blob/master/src/UseReducer/index.js)
<br/>
<br/>

- ## [useCallback](https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback)

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

Útil quando utlizamos callbacks a fim de otimizar componentes filhos, que dependem da igualdade de referência para evitar renderizações desnecessárias.

[Implementação do useCallback no projeto](https://github.com/mateus-azevedo/studying-react-hooks/blob/master/src/UseCallback/index.js)
<br/>
<br/>

- ## [useMemo](https://pt-br.reactjs.org/docs/hooks-reference.html#usememo)

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

Vocẽ pode confiar em useMemo como uma otimização de desempenho, não coom uma garantia semântica.

<p>O <code>useMemo</code> só recuperará o valor memoizado quando o array receber uma atualização. Esta otimização ajuda a evitar cálculos caros em cada renderização.</p>

[Implementação do useMemo no projeto](https://github.com/mateus-azevedo/studying-react-hooks/blob/master/src/UseMemo/index.js)

<br/>
<hr/>

<h1>Link to <a href="https://www.youtube.com/watch?v=LlvBzyy-558">React Hooks Course - All React Hooks Explained</a> on YouTube</h1>
