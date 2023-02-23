const foo = 1;

if (foo == NaN) {
  // ...
}

export function App() {
  return (
    <div>
      <div>hello {foo}</div>
      <div>{`hello ${foo}`}</div>
    </div>
  );
}
