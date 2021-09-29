export function render(el: HTMLElement , content: string) {
    if (el) {
        el.innerHTML += content
    }
}

export function toNumber(input: string): number {
    let numeric = Number(input)
    return numeric
}
