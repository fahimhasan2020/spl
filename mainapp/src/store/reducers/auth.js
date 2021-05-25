import AsyncStorage from '@react-native-async-storage/async-storage';
// 'host':'https://admin.spl.games/',

const data = {
    'host':'https://admin.spl.games/',
    'email':'',
    'firstName':'',
    'lastName':'',
    'coins':0,
    'accessToken':'',
    'profilePicture':'',
    'nid':'',
    'userId':'',
    'phoneNumber':'',
    'referenceCode':'',
    'loggedIn':false,
    'userId':null,
};

const reducer = (state = data, action) => {
    switch (action.type) {
        case 'LOGOUT':
            AsyncStorage.multiSet([['loggedIn', 'false'],['id', ''],['token', ''],['email', ''],['first_name', ''],['last_name', ''],['reference_code', ''],['phone_number', ''],['profile_picture', ''],['nid', '']])
            return {
                ...state,
                loggedIn: action.logged,
            };
        case 'LOGIN':
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'CHANGE_TOKEN':
            return {
                ...state,
                accessToken: action.token
            };
        case 'BUY_COINS':
            return {
                ...state,
                coins: action.coins
            };
        case 'PROFILE_SET':
                return {
                    ...state,
                    firstName: action.user.first_name,
                    email: action.user.email,
                    lastName: action.user.last_name,
                    profilePicture: action.user.profile_picture,
                    nid: action.user.nid,
                    userId:action.user.id,
                    referenceCode:action.user.reference_code,
                    phoneNumber:action.user.phone_number,    
                    coins:action.user.coins                
                };
        case 'CHANGE_DP':
                    return {
                        ...state,
                        profilePicture: action.profile_picture,
                                    
                    };
        case 'CHANGE_BASIC_INFO':
            return {
                ...state,
                firstName:action.info.firstName,
                lastName:action.info.lastName,
                phoneNumber:action.info.phoneNumber,
                referenceCode:action.info.referenceCode
            }
        default:
            return state;
    }
};


export default reducer;


