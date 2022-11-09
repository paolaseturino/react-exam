

// Type of actions
export const SESSION = "SESSION"

// Actions
export function login(auth: boolean) {
    console.log(auth);
    
    return{ type: Boolean, auth}
}