export const fetchSlider = async () => {
    const res = await fetch('http://localhost:3000/api/getSlider')

    const data = await res.json();

    const slider = data.slider;

    return slider
}