import { moduleTwo as multiplyNums } from '../02_moduleTwo/moduleTwo';
const addNums = require('../01_moduleOne/moduleOne');

const combineModules = (num1,num2) => {

	if (Number.isInteger(num1) && Number.isInteger(num2)) {
		return multiplyNums(num1,num2) - addNums(num1,num2)
	} else { return 'arguments must be numbers' }
}

export default combineModules;