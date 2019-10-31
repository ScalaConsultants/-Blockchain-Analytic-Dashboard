import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

const useUserMenuStyles = makeStyles((theme: ExtendedTheme) => ({
    
    container: {
        borderRadius: 10,
        width: 110,
        height: 'auto',
        background: theme.constants.PRIMARY_MAIN_COLOR,
        position: 'absolute',
        top:55,
        right:15,
        padding: '0px 20px 10px 0px'
    },
    menuItemContainer: {
        textAlign: 'right',
        marginTop: 12 
    },
    menuHeader: {
        fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
        fontStyle: theme.constants.DEFAULT_FONT_STYLE,
        fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
        fontSize: 12,
        color: '#4C5367'
    },
    menuItem: {
        fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
        fontStyle: theme.constants.DEFAULT_FONT_STYLE,
        fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
        fontSize: theme.constants.DEFAULT_FONT_SIZE,
        lineHeight: theme.constants.DEFAULT_LINE_HEIGHT,
        cursor: 'pointer',
        color: '#A3A7B0'
    }, 
    hr: {
        border: '1px solid #253152',
    },
    link: {
        textDecoration: 'none'
    }

}));

export default useUserMenuStyles;
