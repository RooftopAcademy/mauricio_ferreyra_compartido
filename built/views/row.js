function row(user) {
    return "\n    <tr>\n        <td>" + user.id + "</td>\n        <td>" + user.username + "</td>\n        <td>" + user.name + "</td>\n        <td>" + user.email + "</td>\n    </tr>\n    ";
}
export default row;
