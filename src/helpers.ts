export function render(el: HTMLElement | null , b: string) {
    if (el) {
        el.innerHTML += b
    }
}

export function toNumber(input: string): number {
    let numeric = Number(input)
    return numeric
}
