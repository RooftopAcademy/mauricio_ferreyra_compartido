function render(el: HTMLElement | null , b: string) {
    if (el) {
        el.innerHTML += b
    }
}

export default render