import { makeStyles } from '@material-ui/core/styles';

const activeStyles = {
  color: '#fff',
  background: 'linear-gradient(90deg, #78CC33 4.76%, #9EE32D 100%)'
}

const useFiltersStyles = makeStyles(() => ({

  button: {
    color: '#A3A7B0',
    background: '#253152',
    borderRadius: '4px',
    borderColor:'#253152',
    width: '38px',
    height: '23px',
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '15px',
    margin: '4px',

    '&:hover': activeStyles
  },

  active: activeStyles

}));

export default useFiltersStyles;
