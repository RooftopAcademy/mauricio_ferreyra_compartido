import { User } from "./User";

export class Users {
    _users: User[] = []

    all(): User[] {
        return this._users
    }

    add(user: User) {
        this._users.push(user)
    }

    findById(id: number): User | undefined {
        return this._users.find(user => user.id == id)
    }
}