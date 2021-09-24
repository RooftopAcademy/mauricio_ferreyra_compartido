function row(user: {id: number, username: string, name: string, email: string}):string {
    return `
    <tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
    </tr>
    `
}

export default row