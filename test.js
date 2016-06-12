/* eslint-disable import/no-unresolved */
import getFocusables from 'htz-get-focusables';
/* eslint-enable import/no-unresolved */

const parent = document.getElementById('focusablesTest1');
const focusableEls = getFocusables(parent);

console.log(focusableEls);
