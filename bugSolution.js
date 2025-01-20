```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // This effect runs only on mount and unmount
    console.log('Mounted!');
    return () => {
      setIsMounted(false);
      console.log('Unmounted!');
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    // Perform any necessary cleanup here
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default MyComponent;
```