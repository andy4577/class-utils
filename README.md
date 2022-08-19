# Class-Utils

This is a simple utility functions to conditionally add remove and manage CSS classes
in your js/ts files.

## Installation

run:
```sh 
npm install @andy4577/class-utils
```
## Usage 

```ts
import {createClasses, getClasses} from '@andy4577/class-utils'

const classes = createClasses('some-class');

render() {
  return (
    <div class={getClasses(classes)}>
    ...
    </div>
  )
}

```
## License
MIT

