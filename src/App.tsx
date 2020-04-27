import * as React from 'react';
import 'whatwg-fetch'; // fetch polyfill
import 'mobx-react-lite/batchingForReactDom';

export default (): React.ReactElement => {
  return (
    <div className="h-full flex flex-col bg-gray-100 container mx-auto">
      Hello World
    </div>
  );
};
