export default abstract class List {
    obj = {}
    cache = new Map
    resultado: any

    setSorting(obj = {}) {
        this.obj = obj
        
        if (this.cache.has(obj)) return

        let keys = Object.keys(obj)

        let temp = keys.map(key => this.sortByKey(key))

        // complete here
    }

    getItems() {
        return this.cache.get(this.obj)
    }

    sortBy(a: any, b: any, key = '') {
        console.log(b[key])
        if (a[key] > b[key]) return 1
        if (a[key] < b[key]) return -1
        return 0
    }

    sortByKey(key: string) {
        return [...this.resultado].sort((a,b) => this.sortBy(a, b, key))
    }
}