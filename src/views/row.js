function row(user) {
    return `
    <tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
    </tr>
    `
}