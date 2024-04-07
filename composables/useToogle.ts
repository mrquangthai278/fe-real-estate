const useToogle = () => {
    const active = ref(false)

    const open = () => {
        active.value = true
    }

    const close = () => {
        active.value = false
    }

    const toogle = () => {
        active.value = !active.value
    }

    return { active, open, close, toogle }
}

export default useToogle