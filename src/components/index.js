import Button from './Button/index'
import SvgIcon from './SvgIcon/index'

const version = '0.1'
const components = [
	Button,
	SvgIcon
]

const install = (Vue) => {
	components.forEach(component => {
		Vue.use(component)
	})
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
	install,
	version,
	Button,
	SvgIcon
}

export default {
  install,
  version
};