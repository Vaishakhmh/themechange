import light from './light';
import dark from './dark';
import blue from './blue';
import red from './red';

const themes = {
	light,
	dark,
	blue,
	red
};

export default function getTheme(theme) {
	return themes[theme];
}
