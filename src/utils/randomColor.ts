export const randomColor = () => {
    const colors = ["#8C8DFF", "#2499EF", "#27CE88", "#FF316F", "#FEC575", "orangered"]
    return colors[Math.floor(Math.random() * colors.length)]
}