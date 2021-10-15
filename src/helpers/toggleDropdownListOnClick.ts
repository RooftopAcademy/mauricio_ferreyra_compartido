/**
 * 
 * change the display state of course topics
 * drop dow list
 * 
 */
export default function toggleDropdownListOnClick (themes: NodeListOf<Element>) {
    themes.forEach(theme => {
        theme.addEventListener('click', function(e) {
            e.preventDefault()
            themes.forEach(element => {
                if (element != theme) { element.classList.remove('active') }
            })
            theme.classList.contains('active') ? theme.classList.remove('active') : theme.classList.add('active')
        })
    })
}