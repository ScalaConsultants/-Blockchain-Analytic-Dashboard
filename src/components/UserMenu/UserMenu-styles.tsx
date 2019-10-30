import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

const useUserMenuStyles = makeStyles((theme: ExtendedTheme) => ({
    
    container: {
        borderRadius: 10,
        width: 120,
        height: 210,
        background: theme.constants.PRIMARY_MAIN_COLOR,
        position: 'absolute',
        top:55,
        right:10,
        padding: 20
    },
    menuItem: {
        fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
        fontStyle: theme.constants.DEFAULT_FONT_STYLE,
        fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
        fontSize: theme.constants.DEFAULT_FONT_SIZE,
        lineHeight: theme.constants.DEFAULT_LINE_HEIGHT,
        cursor: 'pointer',
        color: '#A3A7B0'
    }

}));

export default useUserMenuStyles;
