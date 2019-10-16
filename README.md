Blokchain Analytic Dashboard

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>

## E2E Testing

In the project folder e2e, you can run:

### `yarn open`

Opens the Cypress Test Runner in interactive mode.

### `yarn test`

Runs Cypress tests to completion. By default will run all tests headlessly in the Electron browser.

### `yarn update`

Update packages to the latest version.

### `yarn run lint`

Run eslint.


## Usage of common components

### Loader
Can be used as full page loader or scaled to the element.
Loader has default styles but feel free to use 'loaderClass' or/and 'loaderContainerClass' or/and 'size' to modify them.
props: 
```
{
  isLoading: boolean;
  fullPage?: boolean;
  loaderClass?: string;
  loaderContainerClass?: string;
  loaderSize?: number | string;
  }
```

e.g.
```
<Loader 
    isLoading={transactionsIsFetching} 
    fullPage={false} 
    loaderSize={30}
    loaderClass={loader}
    />
```
In case of scaled Loader - parent should have set 'position: relative' in styles.


### Notification
It's general mechanism. Notification can have three types: error, info or success
E.g. to add new error notification: add proper action type to the switch:
```$xslt
/Users/agatakulbicka/Documents/BLOCKCHAIN/Blockchain-Analytic-Dashboard/src/store/reducers/notifications.ts
```

Infos and successes haven't been implemented yet.
