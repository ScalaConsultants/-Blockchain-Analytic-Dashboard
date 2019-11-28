import { useMappedState } from 'redux-react-hook';

const useRules = () => {

    const mapState = (state: any) => ({
        permissions: state.auth.permissions
    })
    
    const { permissions } = useMappedState(mapState);
    
    //Rules addOwnWallet, deleteOwnWallet, editOwnWallet
    const rules = permissions.reduce((acc: any, value: any) => {
        acc[value] = !!value;
        return acc
    }, {} );

    return rules;
};

export default useRules;
