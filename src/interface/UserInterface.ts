interface UserInterface {
    _username: string
    _password: string
    login(username: string, password: string):void
    logout():void
    changeUsername():void
}