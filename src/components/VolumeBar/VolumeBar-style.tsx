import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

const volumeBarStyles = makeStyles((theme: ExtendedTheme) => ({

    containerOutside: {
        width: '100%',
        height: 12,
        background: '#253152',
        position: 'relative'
    },
    containerInside: {
        width: '50%',
        height: 12,
        background: 'linear-gradient(90deg, #74798C 0%, #A9B0CC 100%)',
        position: 'relative'
    },
    totalVolume: {
        float: 'left',
        color: '#A3A7B0',
        fontSize: 10,
        position: 'relative',
        zIndex: 1000,
        bottom: 3,
        left: 3
    },
    blokchain: {
        float: 'right',
        color: 'white',
        fontSize: 10,
        position: 'relative',
        zIndex: 1000,
        bottom: 3,
        right: 3
    }
}));

export default volumeBarStyles;
