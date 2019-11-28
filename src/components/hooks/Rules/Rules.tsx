import { useMappedState } from 'redux-react-hook';

const useRules = (): Record<string, boolean> => {

    const mapState = (state: any) => ({
        permissions: state.auth.permissions
    })
    
    const { permissions } = useMappedState(mapState);
    
    //Rules addOwnWallet, deleteOwnWallet, editOwnWallet
    const rules = permissions.reduce((acc: boolean[], value: number) => {
        acc[value] = !!value;
        return acc
    }, {} );

    return rules;
};

export default useRules;
