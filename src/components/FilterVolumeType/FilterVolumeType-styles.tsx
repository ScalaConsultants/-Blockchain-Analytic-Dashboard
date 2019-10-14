import { makeStyles } from '@material-ui/styles';
import { ExtendedTheme } from '../../types';

const useFilterVolumeType = makeStyles((theme: ExtendedTheme) => ({
  typeDescription: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#FFFFFF'
      }
}));

export default useFilterVolumeType;
