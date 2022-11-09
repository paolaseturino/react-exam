import { Session } from "inspector"

// Type of actions
export const SESSION = "SESSION"

// Actions
export function login(user: string) {
    return{ type: Session, user}
}